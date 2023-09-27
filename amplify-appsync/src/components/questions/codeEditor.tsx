import React, { useState, ChangeEvent, useContext } from 'react';
import '../../App.css';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ContextData from '../useContext';

interface QuestionDetails {
  id?: string;
  questionType: string;
  subject: string;
  difficulty: string;
  topic: string;
  codeEditor: string;
  textEditor: string;
  options: Array<Option>;
  solution: Array<Solution>;
  hint: Array<Hint>;
  groups: any;
  media: string;
  wordLimit?: any;
  internalKeywords: [string]
  externalKeywords: [string]
  competency: Array<Competency>
  subTopic: string;
  concepts: string;
}

interface Competency {
  subject: string;
  topic: string;
  Level: string;
}

interface Option {
  optionNumber: number;
  correctAnswer: boolean;
  answer: string | null;
  isPartialCorrect: boolean;
  weightage: number;
  negMarks: number;
  splitMarksEqually: string;
  fullMarksIfAnyCorrect: string;
  fullMarksOnlyIfAllCorrect: string;
}

interface Solution {
  optionNumber: number;
  answer: string | null;
  bestSolution: string;
}

interface Hint {
  hint: string;
}


interface ComponentProps {
  value?: string | null;
  language?: string | null;
}

export default function CodeEditor(props: any) {

  const { InputDetails, setInputDetails, editorvalues } = props;
  const { data } = useContext<any>(ContextData);
  const [input, setInput] = useState<string>('');

  // console.log("editorvalues", props);

  let name: any, value: any;
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // console.log("value 1", e.target.value);
    setInput(e.target.value);
    setInputDetails((prevInputDetails: any) => ({
      ...prevInputDetails,
      codeEditor: e.target.value,
    }));
  };

  const ComponentRenderer: React.FC<ComponentProps> = ({ value, language }) => {
    console.log("value 2", value);

    // setInputDetails((prevInputDetails: any) => ({
    //   ...prevInputDetails,
    //   question: value,
    // }));

    //   setInputDetails({
    //     ...InputDetails,
    //     question: value
    // })
    console.log("InputDetails", InputDetails);

    return (
      <SyntaxHighlighter language={language ?? undefined} style={docco}>
        {value ?? ''}
      </SyntaxHighlighter>
    );
  };

  return (
    <div className="editor col-md-12 mt-3">
      <textarea
        className="textarea"
        autoFocus
        // value={input ? input : props.getEditor}
        value={props?.getEditor ? props.getEditor : input}
        onChange={handleInputChange}
      />
      <ReactMarkdown
        // source={input}
        className="markdown"
        /* @ts-ignore */
        components={{ code: ComponentRenderer }}
      >
        {input}
      </ReactMarkdown>

    </div>
  );
}