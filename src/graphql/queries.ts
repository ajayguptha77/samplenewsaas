/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMyTable3 = /* GraphQL */ `
  query GetMyTable3($id: ID!) {
    getMyTable3(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMyTable3s = /* GraphQL */ `
  query ListMyTable3s(
    $filter: ModelMyTable3FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyTable3s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSample123 = /* GraphQL */ `
  query GetSample123($id: ID!) {
    getSample123(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSample123s = /* GraphQL */ `
  query ListSample123s(
    $filter: ModelSample123FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSample123s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getQuestionBankDetails = /* GraphQL */ `
  query GetQuestionBankDetails($id: ID!) {
    getQuestionBankDetails(id: $id) {
      id
      name
      code
      description
      adminID
      visibility
      department
      Groups
      userID
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listQuestionBankDetails = /* GraphQL */ `
  query ListQuestionBankDetails(
    $filter: ModelQuestionBankDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionBankDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        code
        description
        adminID
        visibility
        department
        Groups
        userID
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getQuestions = /* GraphQL */ `
  query GetQuestions($id: ID!) {
    getQuestions(id: $id) {
      id
      questionBankID
      questionType
      questionSubType
      subject
      difficulty
      topic
      directions
      codeEditor
      textEditor
      options {
        isPartialCorrect
        correctAnswer
        optionNumber
        weightage
        answer
        negMarks
        splitMarksEqually
        fullMarksIfAnyCorrect
        fullMarksOnlyIfAllCorrect
        __typename
      }
      solution {
        answer
        optionNumber
        bestSolution
        __typename
      }
      hint {
        optionNumber
        hint
        __typename
      }
      groups
      media
      questionName
      wordLimit
      internalKeywords
      externalKeywords
      videoSolution
      competency {
        progSub
        progTopic
        progLevel
        __typename
      }
      subTopic
      concepts
      adminID
      userID
      blanksCount
      caseSensitive
      QuesDependency
      fillUpanswer {
        splitMarksEqually
        weightage
        answer
        alternateAns
        __typename
      }
      languages
      SingleLanguage
      inputFormat
      outputFormat
      enableCustomInput
      enableAPITesting
      codeConstraints
      evaluationTime
      timeLimit
      memoryLimit
      outputLimit
      codeSize
      sample {
        answer
        optionNumber
        bestSolution
        __typename
      }
      backgroundImg
      initialQuery
      fileCount
      fileCountMandatory
      fileFormats
      enableAutoRecord
      minRecording
      maxRecording
      attemptsToRecord
      autoEvaluation
      cloudProvider
      startTime
      ZipFile
      themes
      fileSizes
      techStack
      instanceSize
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        questionBankID
        questionType
        questionSubType
        subject
        difficulty
        topic
        directions
        codeEditor
        textEditor
        options {
          isPartialCorrect
          correctAnswer
          optionNumber
          weightage
          answer
          negMarks
          splitMarksEqually
          fullMarksIfAnyCorrect
          fullMarksOnlyIfAllCorrect
          __typename
        }
        solution {
          answer
          optionNumber
          bestSolution
          __typename
        }
        hint {
          optionNumber
          hint
          __typename
        }
        groups
        media
        questionName
        wordLimit
        internalKeywords
        externalKeywords
        videoSolution
        competency {
          progSub
          progTopic
          progLevel
          __typename
        }
        subTopic
        concepts
        adminID
        userID
        blanksCount
        caseSensitive
        QuesDependency
        fillUpanswer {
          splitMarksEqually
          weightage
          answer
          alternateAns
          __typename
        }
        languages
        SingleLanguage
        inputFormat
        outputFormat
        enableCustomInput
        enableAPITesting
        codeConstraints
        evaluationTime
        timeLimit
        memoryLimit
        outputLimit
        codeSize
        sample {
          answer
          optionNumber
          bestSolution
          __typename
        }
        backgroundImg
        initialQuery
        fileCount
        fileCountMandatory
        fileFormats
        enableAutoRecord
        minRecording
        maxRecording
        attemptsToRecord
        autoEvaluation
        cloudProvider
        startTime
        ZipFile
        themes
        fileSizes
        techStack
        instanceSize
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getContentBankDetails = /* GraphQL */ `
  query GetContentBankDetails($id: ID!) {
    getContentBankDetails(id: $id) {
      id
      name
      description
      adminID
      visibility
      department
      Groups
      userID
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listContentBankDetails = /* GraphQL */ `
  query ListContentBankDetails(
    $filter: ModelContentBankDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContentBankDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        adminID
        visibility
        department
        Groups
        userID
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getContent = /* GraphQL */ `
  query GetContent($id: ID!) {
    getContent(id: $id) {
      id
      contentBankID
      contentType
      contentsubType
      contentName
      subTopic
      topic
      subject
      content
      averageReadTime
      groups
      additionalInformation
      adminID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listContents = /* GraphQL */ `
  query ListContents(
    $filter: ModelContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        contentBankID
        contentType
        contentsubType
        contentName
        subTopic
        topic
        subject
        content
        averageReadTime
        groups
        additionalInformation
        adminID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMyTable2 = /* GraphQL */ `
  query GetMyTable2($id: ID!) {
    getMyTable2(id: $id) {
      id
      title
      gender
      address
      age
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMyTable2s = /* GraphQL */ `
  query ListMyTable2s(
    $filter: ModelMyTable2FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyTable2s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        gender
        address
        age
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      title
      price
      about
      file
      user_id
      adminID
      courseCode
      validity {
        fromTime
        toTime
        __typename
      }
      description
      leaderBoard
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        price
        about
        file
        user_id
        adminID
        courseCode
        validity {
          fromTime
          toTime
          __typename
        }
        description
        leaderBoard
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTopic = /* GraphQL */ `
  query GetTopic($id: ID!) {
    getTopic(id: $id) {
      id
      name
      status
      userID
      adminID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTopics = /* GraphQL */ `
  query ListTopics(
    $filter: ModelTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        status
        userID
        adminID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSubTopic = /* GraphQL */ `
  query GetSubTopic($id: ID!) {
    getSubTopic(id: $id) {
      id
      topicID
      name
      subject
      status
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSubTopics = /* GraphQL */ `
  query ListSubTopics(
    $filter: ModelSubTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        topicID
        name
        subject
        status
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getThemes = /* GraphQL */ `
  query GetThemes($id: ID!) {
    getThemes(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listThemes = /* GraphQL */ `
  query ListThemes(
    $filter: ModelThemesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listThemes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getInternalKeywords = /* GraphQL */ `
  query GetInternalKeywords($id: ID!) {
    getInternalKeywords(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listInternalKeywords = /* GraphQL */ `
  query ListInternalKeywords(
    $filter: ModelInternalKeywordsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInternalKeywords(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getExternalKeywords = /* GraphQL */ `
  query GetExternalKeywords($id: ID!) {
    getExternalKeywords(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listExternalKeywords = /* GraphQL */ `
  query ListExternalKeywords(
    $filter: ModelExternalKeywordsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExternalKeywords(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLanguage = /* GraphQL */ `
  query GetLanguage($id: ID!) {
    getLanguage(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listLanguages = /* GraphQL */ `
  query ListLanguages(
    $filter: ModelLanguageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLanguages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBatch = /* GraphQL */ `
  query GetBatch($id: ID!) {
    getBatch(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBatches = /* GraphQL */ `
  query ListBatches(
    $filter: ModelBatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBatches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSpecialization = /* GraphQL */ `
  query GetSpecialization($id: ID!) {
    getSpecialization(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSpecializations = /* GraphQL */ `
  query ListSpecializations(
    $filter: ModelSpecializationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpecializations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDepartment = /* GraphQL */ `
  query GetDepartment($id: ID!) {
    getDepartment(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDepartments = /* GraphQL */ `
  query ListDepartments(
    $filter: ModelDepartmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTechStack = /* GraphQL */ `
  query GetTechStack($id: ID!) {
    getTechStack(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTechStacks = /* GraphQL */ `
  query ListTechStacks(
    $filter: ModelTechStackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTechStacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getInstanceSize = /* GraphQL */ `
  query GetInstanceSize($id: ID!) {
    getInstanceSize(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listInstanceSizes = /* GraphQL */ `
  query ListInstanceSizes(
    $filter: ModelInstanceSizeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstanceSizes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProgrammerSubject = /* GraphQL */ `
  query GetProgrammerSubject($id: ID!) {
    getProgrammerSubject(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProgrammerSubjects = /* GraphQL */ `
  query ListProgrammerSubjects(
    $filter: ModelProgrammerSubjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProgrammerSubjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProgrammerTopic = /* GraphQL */ `
  query GetProgrammerTopic($id: ID!) {
    getProgrammerTopic(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProgrammerTopics = /* GraphQL */ `
  query ListProgrammerTopics(
    $filter: ModelProgrammerTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProgrammerTopics(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProgrammerLevel = /* GraphQL */ `
  query GetProgrammerLevel($id: ID!) {
    getProgrammerLevel(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProgrammerLevels = /* GraphQL */ `
  query ListProgrammerLevels(
    $filter: ModelProgrammerLevelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProgrammerLevels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      catergory
      title
      description
      status
      userID
      adminID
      hodID
      tutorID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        catergory
        title
        description
        status
        userID
        adminID
        hodID
        tutorID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      password
      MobNumber
      username
      role
      status
      permissions {
        Jobs {
          showInMenu
          create
          edit
          view
          publisher
          proctorAdmin
          evaluator
          download
          allow
          notallow
          __typename
        }
        Courses {
          showInMenu
          create
          edit
          view
          publisher
          proctorAdmin
          evaluator
          download
          allow
          notallow
          __typename
        }
        Exams {
          showInMenu
          create
          edit
          view
          publisher
          proctorAdmin
          evaluator
          download
          allow
          notallow
          __typename
        }
        Results {
          showInMenu
          create
          edit
          view
          publisher
          proctorAdmin
          evaluator
          download
          allow
          notallow
          __typename
        }
        QuestionBank {
          showInMenu
          create
          edit
          view
          publisher
          proctorAdmin
          evaluator
          download
          allow
          notallow
          __typename
        }
        Questions {
          showInMenu
          create
          edit
          view
          publisher
          proctorAdmin
          evaluator
          download
          allow
          notallow
          __typename
        }
        ContentBank {
          showInMenu
          create
          edit
          view
          publisher
          proctorAdmin
          evaluator
          download
          allow
          notallow
          __typename
        }
        Content {
          showInMenu
          create
          edit
          view
          publisher
          proctorAdmin
          evaluator
          download
          allow
          notallow
          __typename
        }
        Groups {
          showInMenu
          create
          edit
          view
          publisher
          proctorAdmin
          evaluator
          download
          allow
          notallow
          __typename
        }
        Tests {
          showInMenu
          create
          edit
          view
          publisher
          proctorAdmin
          evaluator
          download
          allow
          notallow
          __typename
        }
        Drives {
          showInMenu
          create
          edit
          view
          publisher
          proctorAdmin
          evaluator
          download
          allow
          notallow
          __typename
        }
        Student {
          showInMenu
          create
          edit
          view
          publisher
          proctorAdmin
          evaluator
          download
          allow
          notallow
          __typename
        }
        Reports {
          showInMenu
          create
          edit
          view
          publisher
          proctorAdmin
          evaluator
          download
          allow
          notallow
          __typename
        }
        StudentApprove {
          showInMenu
          create
          edit
          view
          publisher
          proctorAdmin
          evaluator
          download
          allow
          notallow
          __typename
        }
        StudentReject {
          showInMenu
          create
          edit
          view
          publisher
          proctorAdmin
          evaluator
          download
          allow
          notallow
          __typename
        }
        Tutor {
          showInMenu
          create
          edit
          view
          publisher
          proctorAdmin
          evaluator
          download
          allow
          notallow
          __typename
        }
        Attendance {
          showInMenu
          create
          edit
          view
          publisher
          proctorAdmin
          evaluator
          download
          allow
          notallow
          __typename
        }
        LeaderBoard {
          showInMenu
          create
          edit
          view
          publisher
          proctorAdmin
          evaluator
          download
          allow
          notallow
          __typename
        }
        __typename
      }
      adminID
      type
      uploadType
      Groups
      userID
      organisation
      hodID
      tutorID
      Batch
      department
      specialization
      course
      resume
      address
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        password
        MobNumber
        username
        role
        status
        permissions {
          __typename
        }
        adminID
        type
        uploadType
        Groups
        userID
        organisation
        hodID
        tutorID
        Batch
        department
        specialization
        course
        resume
        address
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
