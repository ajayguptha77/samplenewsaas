import React, { useState, useEffect } from 'react';
    import './blog.css';

    // Import your GraphQL operations and API configuration here
    import { API, graphqlOperation } from 'aws-amplify';
    import { listBlogs, listGroups } from '../../graphql/queries';

    interface Blog {
        id: string;
        title: string;
        description: string;
        category: string;
        groupId: string;
    }

    function Blog() {
        const [selectedCategory, setSelectedCategory] = useState('All');
        const [blogsData, setBlogsData] = useState<Blog[]>([]);
        const [groupData, setGroupData] = useState<any[]>([]);
        const [groupRes, setGroupRes] = useState(false);

        async function fetchData(selectedCategory: string) {
            try {
                // Fetch group data and set it in state
                const AllGroups = await API.graphql(graphqlOperation(listGroups)) as any;
                setGroupData(AllGroups.data.listGroups.items);
                setGroupRes(true);

                // Fetch blogs data based on the selected category
                if (selectedCategory === 'All') {
                    const AllBlogs = await API.graphql(graphqlOperation(listBlogs)) as any;
                    setBlogsData(AllBlogs.data.listBlogs.items);
                } else {

                    //console.log("hiiiiii")

                    const filterVariables = {
                        filter: {
                            category: {
                                eq: selectedCategory,
                            },
                        },
                    };
                    console.log("filterVariables", filterVariables)
                    const categoryBlogs = await API.graphql(graphqlOperation(listBlogs, filterVariables)) as any;
                    setBlogsData(categoryBlogs.data.listBlogs.items);
                    console.log("categoryBlogs", categoryBlogs)
                }
            } catch (err) {
                console.log('Error fetching data:', err);
            }
        }

        useEffect(() => {
            fetchData(selectedCategory);
        }, [selectedCategory]);

        const filterBlogsByCategory = (category: string) => {
            setSelectedCategory(category);
        };

        return (
            <div className="blog-container">
                <div className="row">
                    <div className="col-md-8">
                        {groupRes && <h2>{selectedCategory} Blogs</h2>}
                        <ul className="blog-list">
                            {blogsData.map((blog) => (
                                <li key={blog.id} className="blog-item">
                                    <h3 className="blog-title">{blog.title}</h3>
                                    <p className="blog-content">{blog.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <h1>Blog Categories</h1>
                            <button
                                key="All"
                                onClick={() => filterBlogsByCategory('All')}
                                className={`blog-button ${selectedCategory === 'All' ? 'active' : ''}`}
                            >
                                All
                            </button>
                            {groupData.map((group) => (
                                <button
                                    key={group.id}
                                    onClick={() => filterBlogsByCategory(group.name)}
                                    className={`blog-button ${selectedCategory === group.name ? 'active' : ''}`}
                                >
                                    {group.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    export default Blog;