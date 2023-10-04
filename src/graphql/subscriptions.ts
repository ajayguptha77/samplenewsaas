/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMyTable3 = /* GraphQL */ `
  subscription OnCreateMyTable3($filter: ModelSubscriptionMyTable3FilterInput) {
    onCreateMyTable3(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateMyTable3 = /* GraphQL */ `
  subscription OnUpdateMyTable3($filter: ModelSubscriptionMyTable3FilterInput) {
    onUpdateMyTable3(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteMyTable3 = /* GraphQL */ `
  subscription OnDeleteMyTable3($filter: ModelSubscriptionMyTable3FilterInput) {
    onDeleteMyTable3(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateSample123 = /* GraphQL */ `
  subscription OnCreateSample123(
    $filter: ModelSubscriptionSample123FilterInput
  ) {
    onCreateSample123(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSample123 = /* GraphQL */ `
  subscription OnUpdateSample123(
    $filter: ModelSubscriptionSample123FilterInput
  ) {
    onUpdateSample123(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSample123 = /* GraphQL */ `
  subscription OnDeleteSample123(
    $filter: ModelSubscriptionSample123FilterInput
  ) {
    onDeleteSample123(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateQuestionBankDetails = /* GraphQL */ `
  subscription OnCreateQuestionBankDetails(
    $filter: ModelSubscriptionQuestionBankDetailsFilterInput
  ) {
    onCreateQuestionBankDetails(filter: $filter) {
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
export const onUpdateQuestionBankDetails = /* GraphQL */ `
  subscription OnUpdateQuestionBankDetails(
    $filter: ModelSubscriptionQuestionBankDetailsFilterInput
  ) {
    onUpdateQuestionBankDetails(filter: $filter) {
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
export const onDeleteQuestionBankDetails = /* GraphQL */ `
  subscription OnDeleteQuestionBankDetails(
    $filter: ModelSubscriptionQuestionBankDetailsFilterInput
  ) {
    onDeleteQuestionBankDetails(filter: $filter) {
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
export const onCreateQuestions = /* GraphQL */ `
  subscription OnCreateQuestions(
    $filter: ModelSubscriptionQuestionsFilterInput
  ) {
    onCreateQuestions(filter: $filter) {
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
export const onUpdateQuestions = /* GraphQL */ `
  subscription OnUpdateQuestions(
    $filter: ModelSubscriptionQuestionsFilterInput
  ) {
    onUpdateQuestions(filter: $filter) {
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
export const onDeleteQuestions = /* GraphQL */ `
  subscription OnDeleteQuestions(
    $filter: ModelSubscriptionQuestionsFilterInput
  ) {
    onDeleteQuestions(filter: $filter) {
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
export const onCreateContentBankDetails = /* GraphQL */ `
  subscription OnCreateContentBankDetails(
    $filter: ModelSubscriptionContentBankDetailsFilterInput
  ) {
    onCreateContentBankDetails(filter: $filter) {
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
export const onUpdateContentBankDetails = /* GraphQL */ `
  subscription OnUpdateContentBankDetails(
    $filter: ModelSubscriptionContentBankDetailsFilterInput
  ) {
    onUpdateContentBankDetails(filter: $filter) {
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
export const onDeleteContentBankDetails = /* GraphQL */ `
  subscription OnDeleteContentBankDetails(
    $filter: ModelSubscriptionContentBankDetailsFilterInput
  ) {
    onDeleteContentBankDetails(filter: $filter) {
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
export const onCreateContent = /* GraphQL */ `
  subscription OnCreateContent($filter: ModelSubscriptionContentFilterInput) {
    onCreateContent(filter: $filter) {
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
export const onUpdateContent = /* GraphQL */ `
  subscription OnUpdateContent($filter: ModelSubscriptionContentFilterInput) {
    onUpdateContent(filter: $filter) {
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
export const onDeleteContent = /* GraphQL */ `
  subscription OnDeleteContent($filter: ModelSubscriptionContentFilterInput) {
    onDeleteContent(filter: $filter) {
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
export const onCreateMyTable2 = /* GraphQL */ `
  subscription OnCreateMyTable2($filter: ModelSubscriptionMyTable2FilterInput) {
    onCreateMyTable2(filter: $filter) {
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
export const onUpdateMyTable2 = /* GraphQL */ `
  subscription OnUpdateMyTable2($filter: ModelSubscriptionMyTable2FilterInput) {
    onUpdateMyTable2(filter: $filter) {
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
export const onDeleteMyTable2 = /* GraphQL */ `
  subscription OnDeleteMyTable2($filter: ModelSubscriptionMyTable2FilterInput) {
    onDeleteMyTable2(filter: $filter) {
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
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onCreateCourse(filter: $filter) {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onUpdateCourse(filter: $filter) {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse($filter: ModelSubscriptionCourseFilterInput) {
    onDeleteCourse(filter: $filter) {
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
export const onCreateTopic = /* GraphQL */ `
  subscription OnCreateTopic($filter: ModelSubscriptionTopicFilterInput) {
    onCreateTopic(filter: $filter) {
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
export const onUpdateTopic = /* GraphQL */ `
  subscription OnUpdateTopic($filter: ModelSubscriptionTopicFilterInput) {
    onUpdateTopic(filter: $filter) {
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
export const onDeleteTopic = /* GraphQL */ `
  subscription OnDeleteTopic($filter: ModelSubscriptionTopicFilterInput) {
    onDeleteTopic(filter: $filter) {
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
export const onCreateSubTopic = /* GraphQL */ `
  subscription OnCreateSubTopic($filter: ModelSubscriptionSubTopicFilterInput) {
    onCreateSubTopic(filter: $filter) {
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
export const onUpdateSubTopic = /* GraphQL */ `
  subscription OnUpdateSubTopic($filter: ModelSubscriptionSubTopicFilterInput) {
    onUpdateSubTopic(filter: $filter) {
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
export const onDeleteSubTopic = /* GraphQL */ `
  subscription OnDeleteSubTopic($filter: ModelSubscriptionSubTopicFilterInput) {
    onDeleteSubTopic(filter: $filter) {
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
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup($filter: ModelSubscriptionGroupFilterInput) {
    onCreateGroup(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup($filter: ModelSubscriptionGroupFilterInput) {
    onUpdateGroup(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup($filter: ModelSubscriptionGroupFilterInput) {
    onDeleteGroup(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateThemes = /* GraphQL */ `
  subscription OnCreateThemes($filter: ModelSubscriptionThemesFilterInput) {
    onCreateThemes(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateThemes = /* GraphQL */ `
  subscription OnUpdateThemes($filter: ModelSubscriptionThemesFilterInput) {
    onUpdateThemes(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteThemes = /* GraphQL */ `
  subscription OnDeleteThemes($filter: ModelSubscriptionThemesFilterInput) {
    onDeleteThemes(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateInternalKeywords = /* GraphQL */ `
  subscription OnCreateInternalKeywords(
    $filter: ModelSubscriptionInternalKeywordsFilterInput
  ) {
    onCreateInternalKeywords(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateInternalKeywords = /* GraphQL */ `
  subscription OnUpdateInternalKeywords(
    $filter: ModelSubscriptionInternalKeywordsFilterInput
  ) {
    onUpdateInternalKeywords(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteInternalKeywords = /* GraphQL */ `
  subscription OnDeleteInternalKeywords(
    $filter: ModelSubscriptionInternalKeywordsFilterInput
  ) {
    onDeleteInternalKeywords(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateExternalKeywords = /* GraphQL */ `
  subscription OnCreateExternalKeywords(
    $filter: ModelSubscriptionExternalKeywordsFilterInput
  ) {
    onCreateExternalKeywords(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateExternalKeywords = /* GraphQL */ `
  subscription OnUpdateExternalKeywords(
    $filter: ModelSubscriptionExternalKeywordsFilterInput
  ) {
    onUpdateExternalKeywords(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteExternalKeywords = /* GraphQL */ `
  subscription OnDeleteExternalKeywords(
    $filter: ModelSubscriptionExternalKeywordsFilterInput
  ) {
    onDeleteExternalKeywords(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateLanguage = /* GraphQL */ `
  subscription OnCreateLanguage($filter: ModelSubscriptionLanguageFilterInput) {
    onCreateLanguage(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateLanguage = /* GraphQL */ `
  subscription OnUpdateLanguage($filter: ModelSubscriptionLanguageFilterInput) {
    onUpdateLanguage(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteLanguage = /* GraphQL */ `
  subscription OnDeleteLanguage($filter: ModelSubscriptionLanguageFilterInput) {
    onDeleteLanguage(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateBatch = /* GraphQL */ `
  subscription OnCreateBatch($filter: ModelSubscriptionBatchFilterInput) {
    onCreateBatch(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBatch = /* GraphQL */ `
  subscription OnUpdateBatch($filter: ModelSubscriptionBatchFilterInput) {
    onUpdateBatch(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBatch = /* GraphQL */ `
  subscription OnDeleteBatch($filter: ModelSubscriptionBatchFilterInput) {
    onDeleteBatch(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateSpecialization = /* GraphQL */ `
  subscription OnCreateSpecialization(
    $filter: ModelSubscriptionSpecializationFilterInput
  ) {
    onCreateSpecialization(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSpecialization = /* GraphQL */ `
  subscription OnUpdateSpecialization(
    $filter: ModelSubscriptionSpecializationFilterInput
  ) {
    onUpdateSpecialization(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSpecialization = /* GraphQL */ `
  subscription OnDeleteSpecialization(
    $filter: ModelSubscriptionSpecializationFilterInput
  ) {
    onDeleteSpecialization(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateDepartment = /* GraphQL */ `
  subscription OnCreateDepartment(
    $filter: ModelSubscriptionDepartmentFilterInput
  ) {
    onCreateDepartment(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateDepartment = /* GraphQL */ `
  subscription OnUpdateDepartment(
    $filter: ModelSubscriptionDepartmentFilterInput
  ) {
    onUpdateDepartment(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteDepartment = /* GraphQL */ `
  subscription OnDeleteDepartment(
    $filter: ModelSubscriptionDepartmentFilterInput
  ) {
    onDeleteDepartment(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTechStack = /* GraphQL */ `
  subscription OnCreateTechStack(
    $filter: ModelSubscriptionTechStackFilterInput
  ) {
    onCreateTechStack(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTechStack = /* GraphQL */ `
  subscription OnUpdateTechStack(
    $filter: ModelSubscriptionTechStackFilterInput
  ) {
    onUpdateTechStack(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTechStack = /* GraphQL */ `
  subscription OnDeleteTechStack(
    $filter: ModelSubscriptionTechStackFilterInput
  ) {
    onDeleteTechStack(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateInstanceSize = /* GraphQL */ `
  subscription OnCreateInstanceSize(
    $filter: ModelSubscriptionInstanceSizeFilterInput
  ) {
    onCreateInstanceSize(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateInstanceSize = /* GraphQL */ `
  subscription OnUpdateInstanceSize(
    $filter: ModelSubscriptionInstanceSizeFilterInput
  ) {
    onUpdateInstanceSize(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteInstanceSize = /* GraphQL */ `
  subscription OnDeleteInstanceSize(
    $filter: ModelSubscriptionInstanceSizeFilterInput
  ) {
    onDeleteInstanceSize(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateProgrammerSubject = /* GraphQL */ `
  subscription OnCreateProgrammerSubject(
    $filter: ModelSubscriptionProgrammerSubjectFilterInput
  ) {
    onCreateProgrammerSubject(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateProgrammerSubject = /* GraphQL */ `
  subscription OnUpdateProgrammerSubject(
    $filter: ModelSubscriptionProgrammerSubjectFilterInput
  ) {
    onUpdateProgrammerSubject(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteProgrammerSubject = /* GraphQL */ `
  subscription OnDeleteProgrammerSubject(
    $filter: ModelSubscriptionProgrammerSubjectFilterInput
  ) {
    onDeleteProgrammerSubject(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateProgrammerTopic = /* GraphQL */ `
  subscription OnCreateProgrammerTopic(
    $filter: ModelSubscriptionProgrammerTopicFilterInput
  ) {
    onCreateProgrammerTopic(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateProgrammerTopic = /* GraphQL */ `
  subscription OnUpdateProgrammerTopic(
    $filter: ModelSubscriptionProgrammerTopicFilterInput
  ) {
    onUpdateProgrammerTopic(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteProgrammerTopic = /* GraphQL */ `
  subscription OnDeleteProgrammerTopic(
    $filter: ModelSubscriptionProgrammerTopicFilterInput
  ) {
    onDeleteProgrammerTopic(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateProgrammerLevel = /* GraphQL */ `
  subscription OnCreateProgrammerLevel(
    $filter: ModelSubscriptionProgrammerLevelFilterInput
  ) {
    onCreateProgrammerLevel(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateProgrammerLevel = /* GraphQL */ `
  subscription OnUpdateProgrammerLevel(
    $filter: ModelSubscriptionProgrammerLevelFilterInput
  ) {
    onUpdateProgrammerLevel(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteProgrammerLevel = /* GraphQL */ `
  subscription OnDeleteProgrammerLevel(
    $filter: ModelSubscriptionProgrammerLevelFilterInput
  ) {
    onDeleteProgrammerLevel(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onCreateBlog(filter: $filter) {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onUpdateBlog(filter: $filter) {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
    onDeleteBlog(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
