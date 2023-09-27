/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMyTable3 = /* GraphQL */ `
  mutation CreateMyTable3(
    $input: CreateMyTable3Input!
    $condition: ModelMyTable3ConditionInput
  ) {
    createMyTable3(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMyTable3 = /* GraphQL */ `
  mutation UpdateMyTable3(
    $input: UpdateMyTable3Input!
    $condition: ModelMyTable3ConditionInput
  ) {
    updateMyTable3(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMyTable3 = /* GraphQL */ `
  mutation DeleteMyTable3(
    $input: DeleteMyTable3Input!
    $condition: ModelMyTable3ConditionInput
  ) {
    deleteMyTable3(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createSample123 = /* GraphQL */ `
  mutation CreateSample123(
    $input: CreateSample123Input!
    $condition: ModelSample123ConditionInput
  ) {
    createSample123(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSample123 = /* GraphQL */ `
  mutation UpdateSample123(
    $input: UpdateSample123Input!
    $condition: ModelSample123ConditionInput
  ) {
    updateSample123(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSample123 = /* GraphQL */ `
  mutation DeleteSample123(
    $input: DeleteSample123Input!
    $condition: ModelSample123ConditionInput
  ) {
    deleteSample123(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createQuestionBankDetails = /* GraphQL */ `
  mutation CreateQuestionBankDetails(
    $input: CreateQuestionBankDetailsInput!
    $condition: ModelQuestionBankDetailsConditionInput
  ) {
    createQuestionBankDetails(input: $input, condition: $condition) {
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
export const updateQuestionBankDetails = /* GraphQL */ `
  mutation UpdateQuestionBankDetails(
    $input: UpdateQuestionBankDetailsInput!
    $condition: ModelQuestionBankDetailsConditionInput
  ) {
    updateQuestionBankDetails(input: $input, condition: $condition) {
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
export const deleteQuestionBankDetails = /* GraphQL */ `
  mutation DeleteQuestionBankDetails(
    $input: DeleteQuestionBankDetailsInput!
    $condition: ModelQuestionBankDetailsConditionInput
  ) {
    deleteQuestionBankDetails(input: $input, condition: $condition) {
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
export const createQuestions = /* GraphQL */ `
  mutation CreateQuestions(
    $input: CreateQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    createQuestions(input: $input, condition: $condition) {
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
export const updateQuestions = /* GraphQL */ `
  mutation UpdateQuestions(
    $input: UpdateQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    updateQuestions(input: $input, condition: $condition) {
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
export const deleteQuestions = /* GraphQL */ `
  mutation DeleteQuestions(
    $input: DeleteQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    deleteQuestions(input: $input, condition: $condition) {
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
export const createContentBankDetails = /* GraphQL */ `
  mutation CreateContentBankDetails(
    $input: CreateContentBankDetailsInput!
    $condition: ModelContentBankDetailsConditionInput
  ) {
    createContentBankDetails(input: $input, condition: $condition) {
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
export const updateContentBankDetails = /* GraphQL */ `
  mutation UpdateContentBankDetails(
    $input: UpdateContentBankDetailsInput!
    $condition: ModelContentBankDetailsConditionInput
  ) {
    updateContentBankDetails(input: $input, condition: $condition) {
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
export const deleteContentBankDetails = /* GraphQL */ `
  mutation DeleteContentBankDetails(
    $input: DeleteContentBankDetailsInput!
    $condition: ModelContentBankDetailsConditionInput
  ) {
    deleteContentBankDetails(input: $input, condition: $condition) {
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
export const createContent = /* GraphQL */ `
  mutation CreateContent(
    $input: CreateContentInput!
    $condition: ModelContentConditionInput
  ) {
    createContent(input: $input, condition: $condition) {
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
export const updateContent = /* GraphQL */ `
  mutation UpdateContent(
    $input: UpdateContentInput!
    $condition: ModelContentConditionInput
  ) {
    updateContent(input: $input, condition: $condition) {
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
export const deleteContent = /* GraphQL */ `
  mutation DeleteContent(
    $input: DeleteContentInput!
    $condition: ModelContentConditionInput
  ) {
    deleteContent(input: $input, condition: $condition) {
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
export const createMyTable2 = /* GraphQL */ `
  mutation CreateMyTable2(
    $input: CreateMyTable2Input!
    $condition: ModelMyTable2ConditionInput
  ) {
    createMyTable2(input: $input, condition: $condition) {
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
export const updateMyTable2 = /* GraphQL */ `
  mutation UpdateMyTable2(
    $input: UpdateMyTable2Input!
    $condition: ModelMyTable2ConditionInput
  ) {
    updateMyTable2(input: $input, condition: $condition) {
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
export const deleteMyTable2 = /* GraphQL */ `
  mutation DeleteMyTable2(
    $input: DeleteMyTable2Input!
    $condition: ModelMyTable2ConditionInput
  ) {
    deleteMyTable2(input: $input, condition: $condition) {
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
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
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
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
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
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
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
export const createTopic = /* GraphQL */ `
  mutation CreateTopic(
    $input: CreateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    createTopic(input: $input, condition: $condition) {
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
export const updateTopic = /* GraphQL */ `
  mutation UpdateTopic(
    $input: UpdateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    updateTopic(input: $input, condition: $condition) {
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
export const deleteTopic = /* GraphQL */ `
  mutation DeleteTopic(
    $input: DeleteTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    deleteTopic(input: $input, condition: $condition) {
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
export const createSubTopic = /* GraphQL */ `
  mutation CreateSubTopic(
    $input: CreateSubTopicInput!
    $condition: ModelSubTopicConditionInput
  ) {
    createSubTopic(input: $input, condition: $condition) {
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
export const updateSubTopic = /* GraphQL */ `
  mutation UpdateSubTopic(
    $input: UpdateSubTopicInput!
    $condition: ModelSubTopicConditionInput
  ) {
    updateSubTopic(input: $input, condition: $condition) {
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
export const deleteSubTopic = /* GraphQL */ `
  mutation DeleteSubTopic(
    $input: DeleteSubTopicInput!
    $condition: ModelSubTopicConditionInput
  ) {
    deleteSubTopic(input: $input, condition: $condition) {
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
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createThemes = /* GraphQL */ `
  mutation CreateThemes(
    $input: CreateThemesInput!
    $condition: ModelThemesConditionInput
  ) {
    createThemes(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateThemes = /* GraphQL */ `
  mutation UpdateThemes(
    $input: UpdateThemesInput!
    $condition: ModelThemesConditionInput
  ) {
    updateThemes(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteThemes = /* GraphQL */ `
  mutation DeleteThemes(
    $input: DeleteThemesInput!
    $condition: ModelThemesConditionInput
  ) {
    deleteThemes(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createInternalKeywords = /* GraphQL */ `
  mutation CreateInternalKeywords(
    $input: CreateInternalKeywordsInput!
    $condition: ModelInternalKeywordsConditionInput
  ) {
    createInternalKeywords(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateInternalKeywords = /* GraphQL */ `
  mutation UpdateInternalKeywords(
    $input: UpdateInternalKeywordsInput!
    $condition: ModelInternalKeywordsConditionInput
  ) {
    updateInternalKeywords(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteInternalKeywords = /* GraphQL */ `
  mutation DeleteInternalKeywords(
    $input: DeleteInternalKeywordsInput!
    $condition: ModelInternalKeywordsConditionInput
  ) {
    deleteInternalKeywords(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createExternalKeywords = /* GraphQL */ `
  mutation CreateExternalKeywords(
    $input: CreateExternalKeywordsInput!
    $condition: ModelExternalKeywordsConditionInput
  ) {
    createExternalKeywords(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateExternalKeywords = /* GraphQL */ `
  mutation UpdateExternalKeywords(
    $input: UpdateExternalKeywordsInput!
    $condition: ModelExternalKeywordsConditionInput
  ) {
    updateExternalKeywords(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteExternalKeywords = /* GraphQL */ `
  mutation DeleteExternalKeywords(
    $input: DeleteExternalKeywordsInput!
    $condition: ModelExternalKeywordsConditionInput
  ) {
    deleteExternalKeywords(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createLanguage = /* GraphQL */ `
  mutation CreateLanguage(
    $input: CreateLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    createLanguage(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateLanguage = /* GraphQL */ `
  mutation UpdateLanguage(
    $input: UpdateLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    updateLanguage(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteLanguage = /* GraphQL */ `
  mutation DeleteLanguage(
    $input: DeleteLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    deleteLanguage(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBatch = /* GraphQL */ `
  mutation CreateBatch(
    $input: CreateBatchInput!
    $condition: ModelBatchConditionInput
  ) {
    createBatch(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBatch = /* GraphQL */ `
  mutation UpdateBatch(
    $input: UpdateBatchInput!
    $condition: ModelBatchConditionInput
  ) {
    updateBatch(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBatch = /* GraphQL */ `
  mutation DeleteBatch(
    $input: DeleteBatchInput!
    $condition: ModelBatchConditionInput
  ) {
    deleteBatch(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createSpecialization = /* GraphQL */ `
  mutation CreateSpecialization(
    $input: CreateSpecializationInput!
    $condition: ModelSpecializationConditionInput
  ) {
    createSpecialization(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSpecialization = /* GraphQL */ `
  mutation UpdateSpecialization(
    $input: UpdateSpecializationInput!
    $condition: ModelSpecializationConditionInput
  ) {
    updateSpecialization(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSpecialization = /* GraphQL */ `
  mutation DeleteSpecialization(
    $input: DeleteSpecializationInput!
    $condition: ModelSpecializationConditionInput
  ) {
    deleteSpecialization(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createDepartment = /* GraphQL */ `
  mutation CreateDepartment(
    $input: CreateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    createDepartment(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDepartment = /* GraphQL */ `
  mutation UpdateDepartment(
    $input: UpdateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    updateDepartment(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDepartment = /* GraphQL */ `
  mutation DeleteDepartment(
    $input: DeleteDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    deleteDepartment(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTechStack = /* GraphQL */ `
  mutation CreateTechStack(
    $input: CreateTechStackInput!
    $condition: ModelTechStackConditionInput
  ) {
    createTechStack(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTechStack = /* GraphQL */ `
  mutation UpdateTechStack(
    $input: UpdateTechStackInput!
    $condition: ModelTechStackConditionInput
  ) {
    updateTechStack(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTechStack = /* GraphQL */ `
  mutation DeleteTechStack(
    $input: DeleteTechStackInput!
    $condition: ModelTechStackConditionInput
  ) {
    deleteTechStack(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createInstanceSize = /* GraphQL */ `
  mutation CreateInstanceSize(
    $input: CreateInstanceSizeInput!
    $condition: ModelInstanceSizeConditionInput
  ) {
    createInstanceSize(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateInstanceSize = /* GraphQL */ `
  mutation UpdateInstanceSize(
    $input: UpdateInstanceSizeInput!
    $condition: ModelInstanceSizeConditionInput
  ) {
    updateInstanceSize(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteInstanceSize = /* GraphQL */ `
  mutation DeleteInstanceSize(
    $input: DeleteInstanceSizeInput!
    $condition: ModelInstanceSizeConditionInput
  ) {
    deleteInstanceSize(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createProgrammerSubject = /* GraphQL */ `
  mutation CreateProgrammerSubject(
    $input: CreateProgrammerSubjectInput!
    $condition: ModelProgrammerSubjectConditionInput
  ) {
    createProgrammerSubject(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProgrammerSubject = /* GraphQL */ `
  mutation UpdateProgrammerSubject(
    $input: UpdateProgrammerSubjectInput!
    $condition: ModelProgrammerSubjectConditionInput
  ) {
    updateProgrammerSubject(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProgrammerSubject = /* GraphQL */ `
  mutation DeleteProgrammerSubject(
    $input: DeleteProgrammerSubjectInput!
    $condition: ModelProgrammerSubjectConditionInput
  ) {
    deleteProgrammerSubject(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createProgrammerTopic = /* GraphQL */ `
  mutation CreateProgrammerTopic(
    $input: CreateProgrammerTopicInput!
    $condition: ModelProgrammerTopicConditionInput
  ) {
    createProgrammerTopic(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProgrammerTopic = /* GraphQL */ `
  mutation UpdateProgrammerTopic(
    $input: UpdateProgrammerTopicInput!
    $condition: ModelProgrammerTopicConditionInput
  ) {
    updateProgrammerTopic(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProgrammerTopic = /* GraphQL */ `
  mutation DeleteProgrammerTopic(
    $input: DeleteProgrammerTopicInput!
    $condition: ModelProgrammerTopicConditionInput
  ) {
    deleteProgrammerTopic(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createProgrammerLevel = /* GraphQL */ `
  mutation CreateProgrammerLevel(
    $input: CreateProgrammerLevelInput!
    $condition: ModelProgrammerLevelConditionInput
  ) {
    createProgrammerLevel(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProgrammerLevel = /* GraphQL */ `
  mutation UpdateProgrammerLevel(
    $input: UpdateProgrammerLevelInput!
    $condition: ModelProgrammerLevelConditionInput
  ) {
    updateProgrammerLevel(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProgrammerLevel = /* GraphQL */ `
  mutation DeleteProgrammerLevel(
    $input: DeleteProgrammerLevelInput!
    $condition: ModelProgrammerLevelConditionInput
  ) {
    deleteProgrammerLevel(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
