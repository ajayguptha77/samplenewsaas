/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMyTable3Input = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelMyTable3ConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelMyTable3ConditionInput | null > | null,
  or?: Array< ModelMyTable3ConditionInput | null > | null,
  not?: ModelMyTable3ConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type myTable3 = {
  __typename: "myTable3",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMyTable3Input = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteMyTable3Input = {
  id: string,
};

export type CreateSample123Input = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelSample123ConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelSample123ConditionInput | null > | null,
  or?: Array< ModelSample123ConditionInput | null > | null,
  not?: ModelSample123ConditionInput | null,
};

export type sample123 = {
  __typename: "sample123",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSample123Input = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteSample123Input = {
  id: string,
};

export type CreateQuestionBankDetailsInput = {
  id?: string | null,
  name: string,
  code: string,
  description: string,
  adminID?: string | null,
  visibility: string,
  department: string,
  Groups: Array< string | null >,
  userID: string,
  status: number,
};

export type ModelQuestionBankDetailsConditionInput = {
  name?: ModelStringInput | null,
  code?: ModelStringInput | null,
  description?: ModelStringInput | null,
  adminID?: ModelIDInput | null,
  visibility?: ModelStringInput | null,
  department?: ModelIDInput | null,
  Groups?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  status?: ModelIntInput | null,
  and?: Array< ModelQuestionBankDetailsConditionInput | null > | null,
  or?: Array< ModelQuestionBankDetailsConditionInput | null > | null,
  not?: ModelQuestionBankDetailsConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type QuestionBankDetails = {
  __typename: "QuestionBankDetails",
  id: string,
  name: string,
  code: string,
  description: string,
  adminID?: string | null,
  visibility: string,
  department: string,
  Groups: Array< string | null >,
  userID: string,
  status: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateQuestionBankDetailsInput = {
  id: string,
  name?: string | null,
  code?: string | null,
  description?: string | null,
  adminID?: string | null,
  visibility?: string | null,
  department?: string | null,
  Groups?: Array< string | null > | null,
  userID?: string | null,
  status?: number | null,
};

export type DeleteQuestionBankDetailsInput = {
  id: string,
};

export type CreateQuestionsInput = {
  id?: string | null,
  questionBankID: string,
  questionType: string,
  questionSubType: string,
  subject: string,
  difficulty: string,
  topic: string,
  directions?: string | null,
  codeEditor?: string | null,
  textEditor?: string | null,
  options: Array< OptionInput | null >,
  solution: Array< SolutionInput | null >,
  hint: Array< HintInput | null >,
  groups?: Array< string | null > | null,
  media: string,
  questionName?: string | null,
  wordLimit?: number | null,
  internalKeywords?: Array< string | null > | null,
  externalKeywords?: Array< string | null > | null,
  videoSolution?: string | null,
  competency?: Array< CompetencyInput | null > | null,
  subTopic?: string | null,
  concepts?: string | null,
  adminID: string,
  userID: string,
  blanksCount?: number | null,
  caseSensitive?: boolean | null,
  QuesDependency?: string | null,
  fillUpanswer?: Array< AnswerInput | null > | null,
  languages?: Array< string | null > | null,
  SingleLanguage?: string | null,
  inputFormat?: string | null,
  outputFormat?: string | null,
  enableCustomInput?: boolean | null,
  enableAPITesting?: boolean | null,
  codeConstraints?: string | null,
  evaluationTime?: boolean | null,
  timeLimit?: string | null,
  memoryLimit?: string | null,
  outputLimit?: string | null,
  codeSize?: string | null,
  sample?: Array< SolutionInput | null > | null,
  backgroundImg?: string | null,
  initialQuery?: string | null,
  fileCount?: number | null,
  fileCountMandatory?: boolean | null,
  fileFormats?: Array< string | null > | null,
  enableAutoRecord?: boolean | null,
  minRecording?: number | null,
  maxRecording?: number | null,
  attemptsToRecord?: number | null,
  autoEvaluation?: boolean | null,
  cloudProvider?: string | null,
  startTime?: number | null,
  ZipFile?: string | null,
  themes?: Array< string | null > | null,
  fileSizes?: Array< string | null > | null,
  techStack?: string | null,
  instanceSize?: string | null,
};

export type OptionInput = {
  isPartialCorrect: boolean,
  correctAnswer: boolean,
  optionNumber?: number | null,
  weightage: number,
  answer: string,
  negMarks?: number | null,
  splitMarksEqually?: string | null,
  fullMarksIfAnyCorrect?: string | null,
  fullMarksOnlyIfAllCorrect?: string | null,
};

export type SolutionInput = {
  answer: string,
  optionNumber?: number | null,
  bestSolution: boolean,
};

export type HintInput = {
  optionNumber?: number | null,
  hint?: string | null,
};

export type CompetencyInput = {
  progSub: string,
  progTopic: string,
  progLevel: string,
};

export type AnswerInput = {
  splitMarksEqually?: string | null,
  weightage?: number | null,
  answer?: string | null,
  alternateAns?: Array< string | null > | null,
};

export type ModelQuestionsConditionInput = {
  questionBankID?: ModelIDInput | null,
  questionType?: ModelStringInput | null,
  questionSubType?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  difficulty?: ModelStringInput | null,
  topic?: ModelIDInput | null,
  directions?: ModelStringInput | null,
  codeEditor?: ModelStringInput | null,
  textEditor?: ModelStringInput | null,
  groups?: ModelStringInput | null,
  media?: ModelStringInput | null,
  questionName?: ModelStringInput | null,
  wordLimit?: ModelIntInput | null,
  internalKeywords?: ModelStringInput | null,
  externalKeywords?: ModelStringInput | null,
  videoSolution?: ModelStringInput | null,
  subTopic?: ModelStringInput | null,
  concepts?: ModelStringInput | null,
  adminID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  blanksCount?: ModelIntInput | null,
  caseSensitive?: ModelBooleanInput | null,
  QuesDependency?: ModelStringInput | null,
  languages?: ModelIDInput | null,
  SingleLanguage?: ModelStringInput | null,
  inputFormat?: ModelStringInput | null,
  outputFormat?: ModelStringInput | null,
  enableCustomInput?: ModelBooleanInput | null,
  enableAPITesting?: ModelBooleanInput | null,
  codeConstraints?: ModelStringInput | null,
  evaluationTime?: ModelBooleanInput | null,
  timeLimit?: ModelStringInput | null,
  memoryLimit?: ModelStringInput | null,
  outputLimit?: ModelStringInput | null,
  codeSize?: ModelStringInput | null,
  backgroundImg?: ModelStringInput | null,
  initialQuery?: ModelStringInput | null,
  fileCount?: ModelIntInput | null,
  fileCountMandatory?: ModelBooleanInput | null,
  fileFormats?: ModelStringInput | null,
  enableAutoRecord?: ModelBooleanInput | null,
  minRecording?: ModelIntInput | null,
  maxRecording?: ModelIntInput | null,
  attemptsToRecord?: ModelIntInput | null,
  autoEvaluation?: ModelBooleanInput | null,
  cloudProvider?: ModelStringInput | null,
  startTime?: ModelIntInput | null,
  ZipFile?: ModelStringInput | null,
  themes?: ModelStringInput | null,
  fileSizes?: ModelStringInput | null,
  techStack?: ModelIDInput | null,
  instanceSize?: ModelIDInput | null,
  and?: Array< ModelQuestionsConditionInput | null > | null,
  or?: Array< ModelQuestionsConditionInput | null > | null,
  not?: ModelQuestionsConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Questions = {
  __typename: "Questions",
  id: string,
  questionBankID: string,
  questionType: string,
  questionSubType: string,
  subject: string,
  difficulty: string,
  topic: string,
  directions?: string | null,
  codeEditor?: string | null,
  textEditor?: string | null,
  options:  Array<option | null >,
  solution:  Array<solution | null >,
  hint:  Array<hint | null >,
  groups?: Array< string | null > | null,
  media: string,
  questionName?: string | null,
  wordLimit?: number | null,
  internalKeywords?: Array< string | null > | null,
  externalKeywords?: Array< string | null > | null,
  videoSolution?: string | null,
  competency?:  Array<competency | null > | null,
  subTopic?: string | null,
  concepts?: string | null,
  adminID: string,
  userID: string,
  blanksCount?: number | null,
  caseSensitive?: boolean | null,
  QuesDependency?: string | null,
  fillUpanswer?:  Array<answer | null > | null,
  languages?: Array< string | null > | null,
  SingleLanguage?: string | null,
  inputFormat?: string | null,
  outputFormat?: string | null,
  enableCustomInput?: boolean | null,
  enableAPITesting?: boolean | null,
  codeConstraints?: string | null,
  evaluationTime?: boolean | null,
  timeLimit?: string | null,
  memoryLimit?: string | null,
  outputLimit?: string | null,
  codeSize?: string | null,
  sample?:  Array<solution | null > | null,
  backgroundImg?: string | null,
  initialQuery?: string | null,
  fileCount?: number | null,
  fileCountMandatory?: boolean | null,
  fileFormats?: Array< string | null > | null,
  enableAutoRecord?: boolean | null,
  minRecording?: number | null,
  maxRecording?: number | null,
  attemptsToRecord?: number | null,
  autoEvaluation?: boolean | null,
  cloudProvider?: string | null,
  startTime?: number | null,
  ZipFile?: string | null,
  themes?: Array< string | null > | null,
  fileSizes?: Array< string | null > | null,
  techStack?: string | null,
  instanceSize?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type option = {
  __typename: "option",
  isPartialCorrect: boolean,
  correctAnswer: boolean,
  optionNumber?: number | null,
  weightage: number,
  answer: string,
  negMarks?: number | null,
  splitMarksEqually?: string | null,
  fullMarksIfAnyCorrect?: string | null,
  fullMarksOnlyIfAllCorrect?: string | null,
};

export type solution = {
  __typename: "solution",
  answer: string,
  optionNumber?: number | null,
  bestSolution: boolean,
};

export type hint = {
  __typename: "hint",
  optionNumber?: number | null,
  hint?: string | null,
};

export type competency = {
  __typename: "competency",
  progSub: string,
  progTopic: string,
  progLevel: string,
};

export type answer = {
  __typename: "answer",
  splitMarksEqually?: string | null,
  weightage?: number | null,
  answer?: string | null,
  alternateAns?: Array< string | null > | null,
};

export type UpdateQuestionsInput = {
  id: string,
  questionBankID?: string | null,
  questionType?: string | null,
  questionSubType?: string | null,
  subject?: string | null,
  difficulty?: string | null,
  topic?: string | null,
  directions?: string | null,
  codeEditor?: string | null,
  textEditor?: string | null,
  options?: Array< OptionInput | null > | null,
  solution?: Array< SolutionInput | null > | null,
  hint?: Array< HintInput | null > | null,
  groups?: Array< string | null > | null,
  media?: string | null,
  questionName?: string | null,
  wordLimit?: number | null,
  internalKeywords?: Array< string | null > | null,
  externalKeywords?: Array< string | null > | null,
  videoSolution?: string | null,
  competency?: Array< CompetencyInput | null > | null,
  subTopic?: string | null,
  concepts?: string | null,
  adminID?: string | null,
  userID?: string | null,
  blanksCount?: number | null,
  caseSensitive?: boolean | null,
  QuesDependency?: string | null,
  fillUpanswer?: Array< AnswerInput | null > | null,
  languages?: Array< string | null > | null,
  SingleLanguage?: string | null,
  inputFormat?: string | null,
  outputFormat?: string | null,
  enableCustomInput?: boolean | null,
  enableAPITesting?: boolean | null,
  codeConstraints?: string | null,
  evaluationTime?: boolean | null,
  timeLimit?: string | null,
  memoryLimit?: string | null,
  outputLimit?: string | null,
  codeSize?: string | null,
  sample?: Array< SolutionInput | null > | null,
  backgroundImg?: string | null,
  initialQuery?: string | null,
  fileCount?: number | null,
  fileCountMandatory?: boolean | null,
  fileFormats?: Array< string | null > | null,
  enableAutoRecord?: boolean | null,
  minRecording?: number | null,
  maxRecording?: number | null,
  attemptsToRecord?: number | null,
  autoEvaluation?: boolean | null,
  cloudProvider?: string | null,
  startTime?: number | null,
  ZipFile?: string | null,
  themes?: Array< string | null > | null,
  fileSizes?: Array< string | null > | null,
  techStack?: string | null,
  instanceSize?: string | null,
};

export type DeleteQuestionsInput = {
  id: string,
};

export type CreateContentBankDetailsInput = {
  id?: string | null,
  name: string,
  description: string,
  adminID: string,
  visibility: string,
  department: string,
  Groups: Array< string | null >,
  userID: string,
  status: number,
};

export type ModelContentBankDetailsConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  adminID?: ModelIDInput | null,
  visibility?: ModelStringInput | null,
  department?: ModelIDInput | null,
  Groups?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  status?: ModelIntInput | null,
  and?: Array< ModelContentBankDetailsConditionInput | null > | null,
  or?: Array< ModelContentBankDetailsConditionInput | null > | null,
  not?: ModelContentBankDetailsConditionInput | null,
};

export type ContentBankDetails = {
  __typename: "ContentBankDetails",
  id: string,
  name: string,
  description: string,
  adminID: string,
  visibility: string,
  department: string,
  Groups: Array< string | null >,
  userID: string,
  status: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateContentBankDetailsInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  adminID?: string | null,
  visibility?: string | null,
  department?: string | null,
  Groups?: Array< string | null > | null,
  userID?: string | null,
  status?: number | null,
};

export type DeleteContentBankDetailsInput = {
  id: string,
};

export type CreateContentInput = {
  id?: string | null,
  contentBankID: string,
  contentType: string,
  contentsubType: string,
  contentName: string,
  subTopic: string,
  topic: string,
  subject: string,
  content: string,
  averageReadTime: string,
  groups: Array< string | null >,
  additionalInformation: string,
  adminID: string,
  userID: string,
};

export type ModelContentConditionInput = {
  contentBankID?: ModelIDInput | null,
  contentType?: ModelStringInput | null,
  contentsubType?: ModelStringInput | null,
  contentName?: ModelStringInput | null,
  subTopic?: ModelStringInput | null,
  topic?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  content?: ModelStringInput | null,
  averageReadTime?: ModelStringInput | null,
  groups?: ModelStringInput | null,
  additionalInformation?: ModelStringInput | null,
  adminID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelContentConditionInput | null > | null,
  or?: Array< ModelContentConditionInput | null > | null,
  not?: ModelContentConditionInput | null,
};

export type content = {
  __typename: "content",
  id: string,
  contentBankID: string,
  contentType: string,
  contentsubType: string,
  contentName: string,
  subTopic: string,
  topic: string,
  subject: string,
  content: string,
  averageReadTime: string,
  groups: Array< string | null >,
  additionalInformation: string,
  adminID: string,
  userID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateContentInput = {
  id: string,
  contentBankID?: string | null,
  contentType?: string | null,
  contentsubType?: string | null,
  contentName?: string | null,
  subTopic?: string | null,
  topic?: string | null,
  subject?: string | null,
  content?: string | null,
  averageReadTime?: string | null,
  groups?: Array< string | null > | null,
  additionalInformation?: string | null,
  adminID?: string | null,
  userID?: string | null,
};

export type DeleteContentInput = {
  id: string,
};

export type CreateMyTable2Input = {
  id?: string | null,
  title: string,
  gender: string,
  address: string,
  age: number,
};

export type ModelMyTable2ConditionInput = {
  title?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  address?: ModelStringInput | null,
  age?: ModelIntInput | null,
  and?: Array< ModelMyTable2ConditionInput | null > | null,
  or?: Array< ModelMyTable2ConditionInput | null > | null,
  not?: ModelMyTable2ConditionInput | null,
};

export type myTable2 = {
  __typename: "myTable2",
  id: string,
  title: string,
  gender: string,
  address: string,
  age: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMyTable2Input = {
  id: string,
  title?: string | null,
  gender?: string | null,
  address?: string | null,
  age?: number | null,
};

export type DeleteMyTable2Input = {
  id: string,
};

export type CreateCourseInput = {
  id?: string | null,
  title: string,
  price: string,
  about: string,
  file: string,
  user_id: string,
  adminID: string,
  courseCode: string,
  validity: ValidityInput,
  description: string,
  leaderBoard: string,
  status: number,
};

export type ValidityInput = {
  fromTime: string,
  toTime: string,
};

export type ModelCourseConditionInput = {
  title?: ModelStringInput | null,
  price?: ModelStringInput | null,
  about?: ModelStringInput | null,
  file?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  adminID?: ModelIDInput | null,
  courseCode?: ModelStringInput | null,
  description?: ModelStringInput | null,
  leaderBoard?: ModelStringInput | null,
  status?: ModelIntInput | null,
  and?: Array< ModelCourseConditionInput | null > | null,
  or?: Array< ModelCourseConditionInput | null > | null,
  not?: ModelCourseConditionInput | null,
};

export type course = {
  __typename: "course",
  id: string,
  title: string,
  price: string,
  about: string,
  file: string,
  user_id: string,
  adminID: string,
  courseCode: string,
  validity: Validity,
  description: string,
  leaderBoard: string,
  status: number,
  createdAt: string,
  updatedAt: string,
};

export type Validity = {
  __typename: "Validity",
  fromTime: string,
  toTime: string,
};

export type UpdateCourseInput = {
  id: string,
  title?: string | null,
  price?: string | null,
  about?: string | null,
  file?: string | null,
  user_id?: string | null,
  adminID?: string | null,
  courseCode?: string | null,
  validity?: ValidityInput | null,
  description?: string | null,
  leaderBoard?: string | null,
  status?: number | null,
};

export type DeleteCourseInput = {
  id: string,
};

export type CreateTopicInput = {
  id?: string | null,
  name: string,
  status: number,
  userID: string,
  adminID: string,
};

export type ModelTopicConditionInput = {
  name?: ModelStringInput | null,
  status?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  adminID?: ModelIDInput | null,
  and?: Array< ModelTopicConditionInput | null > | null,
  or?: Array< ModelTopicConditionInput | null > | null,
  not?: ModelTopicConditionInput | null,
};

export type topic = {
  __typename: "topic",
  id: string,
  name: string,
  status: number,
  userID: string,
  adminID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTopicInput = {
  id: string,
  name?: string | null,
  status?: number | null,
  userID?: string | null,
  adminID?: string | null,
};

export type DeleteTopicInput = {
  id: string,
};

export type CreateSubTopicInput = {
  id?: string | null,
  topicID: string,
  name: string,
  subject: string,
  status: number,
  userID: string,
};

export type ModelSubTopicConditionInput = {
  topicID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  status?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelSubTopicConditionInput | null > | null,
  or?: Array< ModelSubTopicConditionInput | null > | null,
  not?: ModelSubTopicConditionInput | null,
};

export type subTopic = {
  __typename: "subTopic",
  id: string,
  topicID: string,
  name: string,
  subject: string,
  status: number,
  userID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSubTopicInput = {
  id: string,
  topicID?: string | null,
  name?: string | null,
  subject?: string | null,
  status?: number | null,
  userID?: string | null,
};

export type DeleteSubTopicInput = {
  id: string,
};

export type CreateGroupInput = {
  id?: string | null,
  name: string,
};

export type ModelGroupConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelGroupConditionInput | null > | null,
  or?: Array< ModelGroupConditionInput | null > | null,
  not?: ModelGroupConditionInput | null,
};

export type group = {
  __typename: "group",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGroupInput = {
  id: string,
  name?: string | null,
};

export type DeleteGroupInput = {
  id: string,
};

export type CreateThemesInput = {
  id?: string | null,
  name: string,
};

export type ModelThemesConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelThemesConditionInput | null > | null,
  or?: Array< ModelThemesConditionInput | null > | null,
  not?: ModelThemesConditionInput | null,
};

export type themes = {
  __typename: "themes",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateThemesInput = {
  id: string,
  name?: string | null,
};

export type DeleteThemesInput = {
  id: string,
};

export type CreateInternalKeywordsInput = {
  id?: string | null,
  name: string,
};

export type ModelInternalKeywordsConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelInternalKeywordsConditionInput | null > | null,
  or?: Array< ModelInternalKeywordsConditionInput | null > | null,
  not?: ModelInternalKeywordsConditionInput | null,
};

export type InternalKeywords = {
  __typename: "InternalKeywords",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateInternalKeywordsInput = {
  id: string,
  name?: string | null,
};

export type DeleteInternalKeywordsInput = {
  id: string,
};

export type CreateExternalKeywordsInput = {
  id?: string | null,
  name: string,
};

export type ModelExternalKeywordsConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelExternalKeywordsConditionInput | null > | null,
  or?: Array< ModelExternalKeywordsConditionInput | null > | null,
  not?: ModelExternalKeywordsConditionInput | null,
};

export type ExternalKeywords = {
  __typename: "ExternalKeywords",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateExternalKeywordsInput = {
  id: string,
  name?: string | null,
};

export type DeleteExternalKeywordsInput = {
  id: string,
};

export type CreateLanguageInput = {
  id?: string | null,
  name: string,
};

export type ModelLanguageConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelLanguageConditionInput | null > | null,
  or?: Array< ModelLanguageConditionInput | null > | null,
  not?: ModelLanguageConditionInput | null,
};

export type Language = {
  __typename: "Language",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLanguageInput = {
  id: string,
  name?: string | null,
};

export type DeleteLanguageInput = {
  id: string,
};

export type CreateBatchInput = {
  id?: string | null,
  name: string,
};

export type ModelBatchConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelBatchConditionInput | null > | null,
  or?: Array< ModelBatchConditionInput | null > | null,
  not?: ModelBatchConditionInput | null,
};

export type batch = {
  __typename: "batch",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBatchInput = {
  id: string,
  name?: string | null,
};

export type DeleteBatchInput = {
  id: string,
};

export type CreateSpecializationInput = {
  id?: string | null,
  name: string,
};

export type ModelSpecializationConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSpecializationConditionInput | null > | null,
  or?: Array< ModelSpecializationConditionInput | null > | null,
  not?: ModelSpecializationConditionInput | null,
};

export type specialization = {
  __typename: "specialization",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSpecializationInput = {
  id: string,
  name?: string | null,
};

export type DeleteSpecializationInput = {
  id: string,
};

export type CreateDepartmentInput = {
  id?: string | null,
  name: string,
};

export type ModelDepartmentConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelDepartmentConditionInput | null > | null,
  or?: Array< ModelDepartmentConditionInput | null > | null,
  not?: ModelDepartmentConditionInput | null,
};

export type department = {
  __typename: "department",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateDepartmentInput = {
  id: string,
  name?: string | null,
};

export type DeleteDepartmentInput = {
  id: string,
};

export type CreateTechStackInput = {
  id?: string | null,
  name: string,
};

export type ModelTechStackConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTechStackConditionInput | null > | null,
  or?: Array< ModelTechStackConditionInput | null > | null,
  not?: ModelTechStackConditionInput | null,
};

export type techStack = {
  __typename: "techStack",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTechStackInput = {
  id: string,
  name?: string | null,
};

export type DeleteTechStackInput = {
  id: string,
};

export type CreateInstanceSizeInput = {
  id?: string | null,
  name: string,
};

export type ModelInstanceSizeConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelInstanceSizeConditionInput | null > | null,
  or?: Array< ModelInstanceSizeConditionInput | null > | null,
  not?: ModelInstanceSizeConditionInput | null,
};

export type instanceSize = {
  __typename: "instanceSize",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateInstanceSizeInput = {
  id: string,
  name?: string | null,
};

export type DeleteInstanceSizeInput = {
  id: string,
};

export type CreateProgrammerSubjectInput = {
  id?: string | null,
  name: string,
};

export type ModelProgrammerSubjectConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelProgrammerSubjectConditionInput | null > | null,
  or?: Array< ModelProgrammerSubjectConditionInput | null > | null,
  not?: ModelProgrammerSubjectConditionInput | null,
};

export type programmerSubject = {
  __typename: "programmerSubject",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProgrammerSubjectInput = {
  id: string,
  name?: string | null,
};

export type DeleteProgrammerSubjectInput = {
  id: string,
};

export type CreateProgrammerTopicInput = {
  id?: string | null,
  name: string,
};

export type ModelProgrammerTopicConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelProgrammerTopicConditionInput | null > | null,
  or?: Array< ModelProgrammerTopicConditionInput | null > | null,
  not?: ModelProgrammerTopicConditionInput | null,
};

export type programmerTopic = {
  __typename: "programmerTopic",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProgrammerTopicInput = {
  id: string,
  name?: string | null,
};

export type DeleteProgrammerTopicInput = {
  id: string,
};

export type CreateProgrammerLevelInput = {
  id?: string | null,
  name: string,
};

export type ModelProgrammerLevelConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelProgrammerLevelConditionInput | null > | null,
  or?: Array< ModelProgrammerLevelConditionInput | null > | null,
  not?: ModelProgrammerLevelConditionInput | null,
};

export type programmerLevel = {
  __typename: "programmerLevel",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProgrammerLevelInput = {
  id: string,
  name?: string | null,
};

export type DeleteProgrammerLevelInput = {
  id: string,
};

export type CreateBlogInput = {
  id?: string | null,
  catergory?: Array< string | null > | null,
  title: string,
  description: string,
  status: number,
  userID: string,
  adminID: string,
  hodID: string,
  tutorID: string,
};

export type ModelBlogConditionInput = {
  catergory?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  adminID?: ModelIDInput | null,
  hodID?: ModelIDInput | null,
  tutorID?: ModelIDInput | null,
  and?: Array< ModelBlogConditionInput | null > | null,
  or?: Array< ModelBlogConditionInput | null > | null,
  not?: ModelBlogConditionInput | null,
};

export type blog = {
  __typename: "blog",
  id: string,
  catergory?: Array< string | null > | null,
  title: string,
  description: string,
  status: number,
  userID: string,
  adminID: string,
  hodID: string,
  tutorID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBlogInput = {
  id: string,
  catergory?: Array< string | null > | null,
  title?: string | null,
  description?: string | null,
  status?: number | null,
  userID?: string | null,
  adminID?: string | null,
  hodID?: string | null,
  tutorID?: string | null,
};

export type DeleteBlogInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  email: string,
  password: string,
  MobNumber: string,
  username: string,
  role: string,
  status: number,
  permissions?: PermissionsInput | null,
  adminID: string,
  type?: string | null,
  uploadType?: string | null,
  Groups?: Array< string | null > | null,
  userID?: string | null,
  organisation?: string | null,
  hodID?: string | null,
  tutorID?: string | null,
  Batch?: string | null,
  department?: Array< string | null > | null,
  specialization?: string | null,
  course?: Array< string | null > | null,
  resume?: string | null,
  address?: string | null,
};

export type PermissionsInput = {
  Jobs: PermissionDetailsInput,
  Courses: PermissionDetailsInput,
  Exams: PermissionDetailsInput,
  Results: PermissionDetailsInput,
  QuestionBank: PermissionDetailsInput,
  Questions: PermissionDetailsInput,
  ContentBank: PermissionDetailsInput,
  Content: PermissionDetailsInput,
  Groups: PermissionDetailsInput,
  Tests: PermissionDetailsInput,
  Drives: PermissionDetailsInput,
  Student: PermissionDetailsInput,
  Reports: PermissionDetailsInput,
  StudentApprove: PermissionDetailsInput,
  StudentReject: PermissionDetailsInput,
  Tutor: PermissionDetailsInput,
  Attendance: PermissionDetailsInput,
  LeaderBoard: PermissionDetailsInput,
};

export type PermissionDetailsInput = {
  showInMenu: string,
  create: string,
  edit: string,
  view: string,
  publisher: string,
  proctorAdmin: string,
  evaluator: string,
  download: string,
  allow: string,
  notallow: string,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  MobNumber?: ModelStringInput | null,
  username?: ModelStringInput | null,
  role?: ModelStringInput | null,
  status?: ModelIntInput | null,
  adminID?: ModelIDInput | null,
  type?: ModelStringInput | null,
  uploadType?: ModelStringInput | null,
  Groups?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  organisation?: ModelStringInput | null,
  hodID?: ModelIDInput | null,
  tutorID?: ModelIDInput | null,
  Batch?: ModelStringInput | null,
  department?: ModelIDInput | null,
  specialization?: ModelStringInput | null,
  course?: ModelIDInput | null,
  resume?: ModelStringInput | null,
  address?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type user = {
  __typename: "user",
  id: string,
  email: string,
  password: string,
  MobNumber: string,
  username: string,
  role: string,
  status: number,
  permissions?: Permissions | null,
  adminID: string,
  type?: string | null,
  uploadType?: string | null,
  Groups?: Array< string | null > | null,
  userID?: string | null,
  organisation?: string | null,
  hodID?: string | null,
  tutorID?: string | null,
  Batch?: string | null,
  department?: Array< string | null > | null,
  specialization?: string | null,
  course?: Array< string | null > | null,
  resume?: string | null,
  address?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type Permissions = {
  __typename: "Permissions",
  Jobs: PermissionDetails,
  Courses: PermissionDetails,
  Exams: PermissionDetails,
  Results: PermissionDetails,
  QuestionBank: PermissionDetails,
  Questions: PermissionDetails,
  ContentBank: PermissionDetails,
  Content: PermissionDetails,
  Groups: PermissionDetails,
  Tests: PermissionDetails,
  Drives: PermissionDetails,
  Student: PermissionDetails,
  Reports: PermissionDetails,
  StudentApprove: PermissionDetails,
  StudentReject: PermissionDetails,
  Tutor: PermissionDetails,
  Attendance: PermissionDetails,
  LeaderBoard: PermissionDetails,
};

export type PermissionDetails = {
  __typename: "PermissionDetails",
  showInMenu: string,
  create: string,
  edit: string,
  view: string,
  publisher: string,
  proctorAdmin: string,
  evaluator: string,
  download: string,
  allow: string,
  notallow: string,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  password?: string | null,
  MobNumber?: string | null,
  username?: string | null,
  role?: string | null,
  status?: number | null,
  permissions?: PermissionsInput | null,
  adminID?: string | null,
  type?: string | null,
  uploadType?: string | null,
  Groups?: Array< string | null > | null,
  userID?: string | null,
  organisation?: string | null,
  hodID?: string | null,
  tutorID?: string | null,
  Batch?: string | null,
  department?: Array< string | null > | null,
  specialization?: string | null,
  course?: Array< string | null > | null,
  resume?: string | null,
  address?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelMyTable3FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelMyTable3FilterInput | null > | null,
  or?: Array< ModelMyTable3FilterInput | null > | null,
  not?: ModelMyTable3FilterInput | null,
};

export type ModelMyTable3Connection = {
  __typename: "ModelMyTable3Connection",
  items:  Array<myTable3 | null >,
  nextToken?: string | null,
};

export type ModelSample123FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelSample123FilterInput | null > | null,
  or?: Array< ModelSample123FilterInput | null > | null,
  not?: ModelSample123FilterInput | null,
};

export type ModelSample123Connection = {
  __typename: "ModelSample123Connection",
  items:  Array<sample123 | null >,
  nextToken?: string | null,
};

export type ModelQuestionBankDetailsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  code?: ModelStringInput | null,
  description?: ModelStringInput | null,
  adminID?: ModelIDInput | null,
  visibility?: ModelStringInput | null,
  department?: ModelIDInput | null,
  Groups?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  status?: ModelIntInput | null,
  and?: Array< ModelQuestionBankDetailsFilterInput | null > | null,
  or?: Array< ModelQuestionBankDetailsFilterInput | null > | null,
  not?: ModelQuestionBankDetailsFilterInput | null,
};

export type ModelQuestionBankDetailsConnection = {
  __typename: "ModelQuestionBankDetailsConnection",
  items:  Array<QuestionBankDetails | null >,
  nextToken?: string | null,
};

export type ModelQuestionsFilterInput = {
  id?: ModelIDInput | null,
  questionBankID?: ModelIDInput | null,
  questionType?: ModelStringInput | null,
  questionSubType?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  difficulty?: ModelStringInput | null,
  topic?: ModelIDInput | null,
  directions?: ModelStringInput | null,
  codeEditor?: ModelStringInput | null,
  textEditor?: ModelStringInput | null,
  groups?: ModelStringInput | null,
  media?: ModelStringInput | null,
  questionName?: ModelStringInput | null,
  wordLimit?: ModelIntInput | null,
  internalKeywords?: ModelStringInput | null,
  externalKeywords?: ModelStringInput | null,
  videoSolution?: ModelStringInput | null,
  subTopic?: ModelStringInput | null,
  concepts?: ModelStringInput | null,
  adminID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  blanksCount?: ModelIntInput | null,
  caseSensitive?: ModelBooleanInput | null,
  QuesDependency?: ModelStringInput | null,
  languages?: ModelIDInput | null,
  SingleLanguage?: ModelStringInput | null,
  inputFormat?: ModelStringInput | null,
  outputFormat?: ModelStringInput | null,
  enableCustomInput?: ModelBooleanInput | null,
  enableAPITesting?: ModelBooleanInput | null,
  codeConstraints?: ModelStringInput | null,
  evaluationTime?: ModelBooleanInput | null,
  timeLimit?: ModelStringInput | null,
  memoryLimit?: ModelStringInput | null,
  outputLimit?: ModelStringInput | null,
  codeSize?: ModelStringInput | null,
  backgroundImg?: ModelStringInput | null,
  initialQuery?: ModelStringInput | null,
  fileCount?: ModelIntInput | null,
  fileCountMandatory?: ModelBooleanInput | null,
  fileFormats?: ModelStringInput | null,
  enableAutoRecord?: ModelBooleanInput | null,
  minRecording?: ModelIntInput | null,
  maxRecording?: ModelIntInput | null,
  attemptsToRecord?: ModelIntInput | null,
  autoEvaluation?: ModelBooleanInput | null,
  cloudProvider?: ModelStringInput | null,
  startTime?: ModelIntInput | null,
  ZipFile?: ModelStringInput | null,
  themes?: ModelStringInput | null,
  fileSizes?: ModelStringInput | null,
  techStack?: ModelIDInput | null,
  instanceSize?: ModelIDInput | null,
  and?: Array< ModelQuestionsFilterInput | null > | null,
  or?: Array< ModelQuestionsFilterInput | null > | null,
  not?: ModelQuestionsFilterInput | null,
};

export type ModelQuestionsConnection = {
  __typename: "ModelQuestionsConnection",
  items:  Array<Questions | null >,
  nextToken?: string | null,
};

export type ModelContentBankDetailsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  adminID?: ModelIDInput | null,
  visibility?: ModelStringInput | null,
  department?: ModelIDInput | null,
  Groups?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  status?: ModelIntInput | null,
  and?: Array< ModelContentBankDetailsFilterInput | null > | null,
  or?: Array< ModelContentBankDetailsFilterInput | null > | null,
  not?: ModelContentBankDetailsFilterInput | null,
};

export type ModelContentBankDetailsConnection = {
  __typename: "ModelContentBankDetailsConnection",
  items:  Array<ContentBankDetails | null >,
  nextToken?: string | null,
};

export type ModelContentFilterInput = {
  id?: ModelIDInput | null,
  contentBankID?: ModelIDInput | null,
  contentType?: ModelStringInput | null,
  contentsubType?: ModelStringInput | null,
  contentName?: ModelStringInput | null,
  subTopic?: ModelStringInput | null,
  topic?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  content?: ModelStringInput | null,
  averageReadTime?: ModelStringInput | null,
  groups?: ModelStringInput | null,
  additionalInformation?: ModelStringInput | null,
  adminID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelContentFilterInput | null > | null,
  or?: Array< ModelContentFilterInput | null > | null,
  not?: ModelContentFilterInput | null,
};

export type ModelContentConnection = {
  __typename: "ModelContentConnection",
  items:  Array<content | null >,
  nextToken?: string | null,
};

export type ModelMyTable2FilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  address?: ModelStringInput | null,
  age?: ModelIntInput | null,
  and?: Array< ModelMyTable2FilterInput | null > | null,
  or?: Array< ModelMyTable2FilterInput | null > | null,
  not?: ModelMyTable2FilterInput | null,
};

export type ModelMyTable2Connection = {
  __typename: "ModelMyTable2Connection",
  items:  Array<myTable2 | null >,
  nextToken?: string | null,
};

export type ModelCourseFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  price?: ModelStringInput | null,
  about?: ModelStringInput | null,
  file?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  adminID?: ModelIDInput | null,
  courseCode?: ModelStringInput | null,
  description?: ModelStringInput | null,
  leaderBoard?: ModelStringInput | null,
  status?: ModelIntInput | null,
  and?: Array< ModelCourseFilterInput | null > | null,
  or?: Array< ModelCourseFilterInput | null > | null,
  not?: ModelCourseFilterInput | null,
};

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection",
  items:  Array<course | null >,
  nextToken?: string | null,
};

export type ModelTopicFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  status?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  adminID?: ModelIDInput | null,
  and?: Array< ModelTopicFilterInput | null > | null,
  or?: Array< ModelTopicFilterInput | null > | null,
  not?: ModelTopicFilterInput | null,
};

export type ModelTopicConnection = {
  __typename: "ModelTopicConnection",
  items:  Array<topic | null >,
  nextToken?: string | null,
};

export type ModelSubTopicFilterInput = {
  id?: ModelIDInput | null,
  topicID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  status?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelSubTopicFilterInput | null > | null,
  or?: Array< ModelSubTopicFilterInput | null > | null,
  not?: ModelSubTopicFilterInput | null,
};

export type ModelSubTopicConnection = {
  __typename: "ModelSubTopicConnection",
  items:  Array<subTopic | null >,
  nextToken?: string | null,
};

export type ModelGroupFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelGroupFilterInput | null > | null,
  or?: Array< ModelGroupFilterInput | null > | null,
  not?: ModelGroupFilterInput | null,
};

export type ModelGroupConnection = {
  __typename: "ModelGroupConnection",
  items:  Array<group | null >,
  nextToken?: string | null,
};

export type ModelThemesFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelThemesFilterInput | null > | null,
  or?: Array< ModelThemesFilterInput | null > | null,
  not?: ModelThemesFilterInput | null,
};

export type ModelThemesConnection = {
  __typename: "ModelThemesConnection",
  items:  Array<themes | null >,
  nextToken?: string | null,
};

export type ModelInternalKeywordsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelInternalKeywordsFilterInput | null > | null,
  or?: Array< ModelInternalKeywordsFilterInput | null > | null,
  not?: ModelInternalKeywordsFilterInput | null,
};

export type ModelInternalKeywordsConnection = {
  __typename: "ModelInternalKeywordsConnection",
  items:  Array<InternalKeywords | null >,
  nextToken?: string | null,
};

export type ModelExternalKeywordsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelExternalKeywordsFilterInput | null > | null,
  or?: Array< ModelExternalKeywordsFilterInput | null > | null,
  not?: ModelExternalKeywordsFilterInput | null,
};

export type ModelExternalKeywordsConnection = {
  __typename: "ModelExternalKeywordsConnection",
  items:  Array<ExternalKeywords | null >,
  nextToken?: string | null,
};

export type ModelLanguageFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelLanguageFilterInput | null > | null,
  or?: Array< ModelLanguageFilterInput | null > | null,
  not?: ModelLanguageFilterInput | null,
};

export type ModelLanguageConnection = {
  __typename: "ModelLanguageConnection",
  items:  Array<Language | null >,
  nextToken?: string | null,
};

export type ModelBatchFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelBatchFilterInput | null > | null,
  or?: Array< ModelBatchFilterInput | null > | null,
  not?: ModelBatchFilterInput | null,
};

export type ModelBatchConnection = {
  __typename: "ModelBatchConnection",
  items:  Array<batch | null >,
  nextToken?: string | null,
};

export type ModelSpecializationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelSpecializationFilterInput | null > | null,
  or?: Array< ModelSpecializationFilterInput | null > | null,
  not?: ModelSpecializationFilterInput | null,
};

export type ModelSpecializationConnection = {
  __typename: "ModelSpecializationConnection",
  items:  Array<specialization | null >,
  nextToken?: string | null,
};

export type ModelDepartmentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelDepartmentFilterInput | null > | null,
  or?: Array< ModelDepartmentFilterInput | null > | null,
  not?: ModelDepartmentFilterInput | null,
};

export type ModelDepartmentConnection = {
  __typename: "ModelDepartmentConnection",
  items:  Array<department | null >,
  nextToken?: string | null,
};

export type ModelTechStackFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTechStackFilterInput | null > | null,
  or?: Array< ModelTechStackFilterInput | null > | null,
  not?: ModelTechStackFilterInput | null,
};

export type ModelTechStackConnection = {
  __typename: "ModelTechStackConnection",
  items:  Array<techStack | null >,
  nextToken?: string | null,
};

export type ModelInstanceSizeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelInstanceSizeFilterInput | null > | null,
  or?: Array< ModelInstanceSizeFilterInput | null > | null,
  not?: ModelInstanceSizeFilterInput | null,
};

export type ModelInstanceSizeConnection = {
  __typename: "ModelInstanceSizeConnection",
  items:  Array<instanceSize | null >,
  nextToken?: string | null,
};

export type ModelProgrammerSubjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelProgrammerSubjectFilterInput | null > | null,
  or?: Array< ModelProgrammerSubjectFilterInput | null > | null,
  not?: ModelProgrammerSubjectFilterInput | null,
};

export type ModelProgrammerSubjectConnection = {
  __typename: "ModelProgrammerSubjectConnection",
  items:  Array<programmerSubject | null >,
  nextToken?: string | null,
};

export type ModelProgrammerTopicFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelProgrammerTopicFilterInput | null > | null,
  or?: Array< ModelProgrammerTopicFilterInput | null > | null,
  not?: ModelProgrammerTopicFilterInput | null,
};

export type ModelProgrammerTopicConnection = {
  __typename: "ModelProgrammerTopicConnection",
  items:  Array<programmerTopic | null >,
  nextToken?: string | null,
};

export type ModelProgrammerLevelFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelProgrammerLevelFilterInput | null > | null,
  or?: Array< ModelProgrammerLevelFilterInput | null > | null,
  not?: ModelProgrammerLevelFilterInput | null,
};

export type ModelProgrammerLevelConnection = {
  __typename: "ModelProgrammerLevelConnection",
  items:  Array<programmerLevel | null >,
  nextToken?: string | null,
};

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null,
  catergory?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  adminID?: ModelIDInput | null,
  hodID?: ModelIDInput | null,
  tutorID?: ModelIDInput | null,
  and?: Array< ModelBlogFilterInput | null > | null,
  or?: Array< ModelBlogFilterInput | null > | null,
  not?: ModelBlogFilterInput | null,
};

export type ModelBlogConnection = {
  __typename: "ModelBlogConnection",
  items:  Array<blog | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  MobNumber?: ModelStringInput | null,
  username?: ModelStringInput | null,
  role?: ModelStringInput | null,
  status?: ModelIntInput | null,
  adminID?: ModelIDInput | null,
  type?: ModelStringInput | null,
  uploadType?: ModelStringInput | null,
  Groups?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  organisation?: ModelStringInput | null,
  hodID?: ModelIDInput | null,
  tutorID?: ModelIDInput | null,
  Batch?: ModelStringInput | null,
  department?: ModelIDInput | null,
  specialization?: ModelStringInput | null,
  course?: ModelIDInput | null,
  resume?: ModelStringInput | null,
  address?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<user | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionMyTable3FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMyTable3FilterInput | null > | null,
  or?: Array< ModelSubscriptionMyTable3FilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionSample123FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSample123FilterInput | null > | null,
  or?: Array< ModelSubscriptionSample123FilterInput | null > | null,
};

export type ModelSubscriptionQuestionBankDetailsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  code?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  adminID?: ModelSubscriptionIDInput | null,
  visibility?: ModelSubscriptionStringInput | null,
  department?: ModelSubscriptionIDInput | null,
  Groups?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionQuestionBankDetailsFilterInput | null > | null,
  or?: Array< ModelSubscriptionQuestionBankDetailsFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionQuestionsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  questionBankID?: ModelSubscriptionIDInput | null,
  questionType?: ModelSubscriptionStringInput | null,
  questionSubType?: ModelSubscriptionStringInput | null,
  subject?: ModelSubscriptionStringInput | null,
  difficulty?: ModelSubscriptionStringInput | null,
  topic?: ModelSubscriptionIDInput | null,
  directions?: ModelSubscriptionStringInput | null,
  codeEditor?: ModelSubscriptionStringInput | null,
  textEditor?: ModelSubscriptionStringInput | null,
  groups?: ModelSubscriptionStringInput | null,
  media?: ModelSubscriptionStringInput | null,
  questionName?: ModelSubscriptionStringInput | null,
  wordLimit?: ModelSubscriptionIntInput | null,
  internalKeywords?: ModelSubscriptionStringInput | null,
  externalKeywords?: ModelSubscriptionStringInput | null,
  videoSolution?: ModelSubscriptionStringInput | null,
  subTopic?: ModelSubscriptionStringInput | null,
  concepts?: ModelSubscriptionStringInput | null,
  adminID?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  blanksCount?: ModelSubscriptionIntInput | null,
  caseSensitive?: ModelSubscriptionBooleanInput | null,
  QuesDependency?: ModelSubscriptionStringInput | null,
  languages?: ModelSubscriptionIDInput | null,
  SingleLanguage?: ModelSubscriptionStringInput | null,
  inputFormat?: ModelSubscriptionStringInput | null,
  outputFormat?: ModelSubscriptionStringInput | null,
  enableCustomInput?: ModelSubscriptionBooleanInput | null,
  enableAPITesting?: ModelSubscriptionBooleanInput | null,
  codeConstraints?: ModelSubscriptionStringInput | null,
  evaluationTime?: ModelSubscriptionBooleanInput | null,
  timeLimit?: ModelSubscriptionStringInput | null,
  memoryLimit?: ModelSubscriptionStringInput | null,
  outputLimit?: ModelSubscriptionStringInput | null,
  codeSize?: ModelSubscriptionStringInput | null,
  backgroundImg?: ModelSubscriptionStringInput | null,
  initialQuery?: ModelSubscriptionStringInput | null,
  fileCount?: ModelSubscriptionIntInput | null,
  fileCountMandatory?: ModelSubscriptionBooleanInput | null,
  fileFormats?: ModelSubscriptionStringInput | null,
  enableAutoRecord?: ModelSubscriptionBooleanInput | null,
  minRecording?: ModelSubscriptionIntInput | null,
  maxRecording?: ModelSubscriptionIntInput | null,
  attemptsToRecord?: ModelSubscriptionIntInput | null,
  autoEvaluation?: ModelSubscriptionBooleanInput | null,
  cloudProvider?: ModelSubscriptionStringInput | null,
  startTime?: ModelSubscriptionIntInput | null,
  ZipFile?: ModelSubscriptionStringInput | null,
  themes?: ModelSubscriptionStringInput | null,
  fileSizes?: ModelSubscriptionStringInput | null,
  techStack?: ModelSubscriptionIDInput | null,
  instanceSize?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionQuestionsFilterInput | null > | null,
  or?: Array< ModelSubscriptionQuestionsFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionContentBankDetailsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  adminID?: ModelSubscriptionIDInput | null,
  visibility?: ModelSubscriptionStringInput | null,
  department?: ModelSubscriptionIDInput | null,
  Groups?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionContentBankDetailsFilterInput | null > | null,
  or?: Array< ModelSubscriptionContentBankDetailsFilterInput | null > | null,
};

export type ModelSubscriptionContentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  contentBankID?: ModelSubscriptionIDInput | null,
  contentType?: ModelSubscriptionStringInput | null,
  contentsubType?: ModelSubscriptionStringInput | null,
  contentName?: ModelSubscriptionStringInput | null,
  subTopic?: ModelSubscriptionStringInput | null,
  topic?: ModelSubscriptionStringInput | null,
  subject?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  averageReadTime?: ModelSubscriptionStringInput | null,
  groups?: ModelSubscriptionStringInput | null,
  additionalInformation?: ModelSubscriptionStringInput | null,
  adminID?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionContentFilterInput | null > | null,
  or?: Array< ModelSubscriptionContentFilterInput | null > | null,
};

export type ModelSubscriptionMyTable2FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  age?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionMyTable2FilterInput | null > | null,
  or?: Array< ModelSubscriptionMyTable2FilterInput | null > | null,
};

export type ModelSubscriptionCourseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionStringInput | null,
  about?: ModelSubscriptionStringInput | null,
  file?: ModelSubscriptionStringInput | null,
  user_id?: ModelSubscriptionIDInput | null,
  adminID?: ModelSubscriptionIDInput | null,
  courseCode?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  leaderBoard?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionCourseFilterInput | null > | null,
  or?: Array< ModelSubscriptionCourseFilterInput | null > | null,
};

export type ModelSubscriptionTopicFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionIntInput | null,
  userID?: ModelSubscriptionIDInput | null,
  adminID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionTopicFilterInput | null > | null,
  or?: Array< ModelSubscriptionTopicFilterInput | null > | null,
};

export type ModelSubscriptionSubTopicFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  topicID?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  subject?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionIntInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionSubTopicFilterInput | null > | null,
  or?: Array< ModelSubscriptionSubTopicFilterInput | null > | null,
};

export type ModelSubscriptionGroupFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGroupFilterInput | null > | null,
  or?: Array< ModelSubscriptionGroupFilterInput | null > | null,
};

export type ModelSubscriptionThemesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionThemesFilterInput | null > | null,
  or?: Array< ModelSubscriptionThemesFilterInput | null > | null,
};

export type ModelSubscriptionInternalKeywordsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInternalKeywordsFilterInput | null > | null,
  or?: Array< ModelSubscriptionInternalKeywordsFilterInput | null > | null,
};

export type ModelSubscriptionExternalKeywordsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExternalKeywordsFilterInput | null > | null,
  or?: Array< ModelSubscriptionExternalKeywordsFilterInput | null > | null,
};

export type ModelSubscriptionLanguageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLanguageFilterInput | null > | null,
  or?: Array< ModelSubscriptionLanguageFilterInput | null > | null,
};

export type ModelSubscriptionBatchFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBatchFilterInput | null > | null,
  or?: Array< ModelSubscriptionBatchFilterInput | null > | null,
};

export type ModelSubscriptionSpecializationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSpecializationFilterInput | null > | null,
  or?: Array< ModelSubscriptionSpecializationFilterInput | null > | null,
};

export type ModelSubscriptionDepartmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDepartmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionDepartmentFilterInput | null > | null,
};

export type ModelSubscriptionTechStackFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTechStackFilterInput | null > | null,
  or?: Array< ModelSubscriptionTechStackFilterInput | null > | null,
};

export type ModelSubscriptionInstanceSizeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInstanceSizeFilterInput | null > | null,
  or?: Array< ModelSubscriptionInstanceSizeFilterInput | null > | null,
};

export type ModelSubscriptionProgrammerSubjectFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProgrammerSubjectFilterInput | null > | null,
  or?: Array< ModelSubscriptionProgrammerSubjectFilterInput | null > | null,
};

export type ModelSubscriptionProgrammerTopicFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProgrammerTopicFilterInput | null > | null,
  or?: Array< ModelSubscriptionProgrammerTopicFilterInput | null > | null,
};

export type ModelSubscriptionProgrammerLevelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProgrammerLevelFilterInput | null > | null,
  or?: Array< ModelSubscriptionProgrammerLevelFilterInput | null > | null,
};

export type ModelSubscriptionBlogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  catergory?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionIntInput | null,
  userID?: ModelSubscriptionIDInput | null,
  adminID?: ModelSubscriptionIDInput | null,
  hodID?: ModelSubscriptionIDInput | null,
  tutorID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBlogFilterInput | null > | null,
  or?: Array< ModelSubscriptionBlogFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  MobNumber?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionIntInput | null,
  adminID?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  uploadType?: ModelSubscriptionStringInput | null,
  Groups?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  organisation?: ModelSubscriptionStringInput | null,
  hodID?: ModelSubscriptionIDInput | null,
  tutorID?: ModelSubscriptionIDInput | null,
  Batch?: ModelSubscriptionStringInput | null,
  department?: ModelSubscriptionIDInput | null,
  specialization?: ModelSubscriptionStringInput | null,
  course?: ModelSubscriptionIDInput | null,
  resume?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type CreateMyTable3MutationVariables = {
  input: CreateMyTable3Input,
  condition?: ModelMyTable3ConditionInput | null,
};

export type CreateMyTable3Mutation = {
  createMyTable3?:  {
    __typename: "myTable3",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMyTable3MutationVariables = {
  input: UpdateMyTable3Input,
  condition?: ModelMyTable3ConditionInput | null,
};

export type UpdateMyTable3Mutation = {
  updateMyTable3?:  {
    __typename: "myTable3",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMyTable3MutationVariables = {
  input: DeleteMyTable3Input,
  condition?: ModelMyTable3ConditionInput | null,
};

export type DeleteMyTable3Mutation = {
  deleteMyTable3?:  {
    __typename: "myTable3",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSample123MutationVariables = {
  input: CreateSample123Input,
  condition?: ModelSample123ConditionInput | null,
};

export type CreateSample123Mutation = {
  createSample123?:  {
    __typename: "sample123",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSample123MutationVariables = {
  input: UpdateSample123Input,
  condition?: ModelSample123ConditionInput | null,
};

export type UpdateSample123Mutation = {
  updateSample123?:  {
    __typename: "sample123",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSample123MutationVariables = {
  input: DeleteSample123Input,
  condition?: ModelSample123ConditionInput | null,
};

export type DeleteSample123Mutation = {
  deleteSample123?:  {
    __typename: "sample123",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateQuestionBankDetailsMutationVariables = {
  input: CreateQuestionBankDetailsInput,
  condition?: ModelQuestionBankDetailsConditionInput | null,
};

export type CreateQuestionBankDetailsMutation = {
  createQuestionBankDetails?:  {
    __typename: "QuestionBankDetails",
    id: string,
    name: string,
    code: string,
    description: string,
    adminID?: string | null,
    visibility: string,
    department: string,
    Groups: Array< string | null >,
    userID: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQuestionBankDetailsMutationVariables = {
  input: UpdateQuestionBankDetailsInput,
  condition?: ModelQuestionBankDetailsConditionInput | null,
};

export type UpdateQuestionBankDetailsMutation = {
  updateQuestionBankDetails?:  {
    __typename: "QuestionBankDetails",
    id: string,
    name: string,
    code: string,
    description: string,
    adminID?: string | null,
    visibility: string,
    department: string,
    Groups: Array< string | null >,
    userID: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQuestionBankDetailsMutationVariables = {
  input: DeleteQuestionBankDetailsInput,
  condition?: ModelQuestionBankDetailsConditionInput | null,
};

export type DeleteQuestionBankDetailsMutation = {
  deleteQuestionBankDetails?:  {
    __typename: "QuestionBankDetails",
    id: string,
    name: string,
    code: string,
    description: string,
    adminID?: string | null,
    visibility: string,
    department: string,
    Groups: Array< string | null >,
    userID: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateQuestionsMutationVariables = {
  input: CreateQuestionsInput,
  condition?: ModelQuestionsConditionInput | null,
};

export type CreateQuestionsMutation = {
  createQuestions?:  {
    __typename: "Questions",
    id: string,
    questionBankID: string,
    questionType: string,
    questionSubType: string,
    subject: string,
    difficulty: string,
    topic: string,
    directions?: string | null,
    codeEditor?: string | null,
    textEditor?: string | null,
    options:  Array< {
      __typename: "option",
      isPartialCorrect: boolean,
      correctAnswer: boolean,
      optionNumber?: number | null,
      weightage: number,
      answer: string,
      negMarks?: number | null,
      splitMarksEqually?: string | null,
      fullMarksIfAnyCorrect?: string | null,
      fullMarksOnlyIfAllCorrect?: string | null,
    } | null >,
    solution:  Array< {
      __typename: "solution",
      answer: string,
      optionNumber?: number | null,
      bestSolution: boolean,
    } | null >,
    hint:  Array< {
      __typename: "hint",
      optionNumber?: number | null,
      hint?: string | null,
    } | null >,
    groups?: Array< string | null > | null,
    media: string,
    questionName?: string | null,
    wordLimit?: number | null,
    internalKeywords?: Array< string | null > | null,
    externalKeywords?: Array< string | null > | null,
    videoSolution?: string | null,
    competency?:  Array< {
      __typename: "competency",
      progSub: string,
      progTopic: string,
      progLevel: string,
    } | null > | null,
    subTopic?: string | null,
    concepts?: string | null,
    adminID: string,
    userID: string,
    blanksCount?: number | null,
    caseSensitive?: boolean | null,
    QuesDependency?: string | null,
    fillUpanswer?:  Array< {
      __typename: "answer",
      splitMarksEqually?: string | null,
      weightage?: number | null,
      answer?: string | null,
      alternateAns?: Array< string | null > | null,
    } | null > | null,
    languages?: Array< string | null > | null,
    SingleLanguage?: string | null,
    inputFormat?: string | null,
    outputFormat?: string | null,
    enableCustomInput?: boolean | null,
    enableAPITesting?: boolean | null,
    codeConstraints?: string | null,
    evaluationTime?: boolean | null,
    timeLimit?: string | null,
    memoryLimit?: string | null,
    outputLimit?: string | null,
    codeSize?: string | null,
    sample?:  Array< {
      __typename: "solution",
      answer: string,
      optionNumber?: number | null,
      bestSolution: boolean,
    } | null > | null,
    backgroundImg?: string | null,
    initialQuery?: string | null,
    fileCount?: number | null,
    fileCountMandatory?: boolean | null,
    fileFormats?: Array< string | null > | null,
    enableAutoRecord?: boolean | null,
    minRecording?: number | null,
    maxRecording?: number | null,
    attemptsToRecord?: number | null,
    autoEvaluation?: boolean | null,
    cloudProvider?: string | null,
    startTime?: number | null,
    ZipFile?: string | null,
    themes?: Array< string | null > | null,
    fileSizes?: Array< string | null > | null,
    techStack?: string | null,
    instanceSize?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQuestionsMutationVariables = {
  input: UpdateQuestionsInput,
  condition?: ModelQuestionsConditionInput | null,
};

export type UpdateQuestionsMutation = {
  updateQuestions?:  {
    __typename: "Questions",
    id: string,
    questionBankID: string,
    questionType: string,
    questionSubType: string,
    subject: string,
    difficulty: string,
    topic: string,
    directions?: string | null,
    codeEditor?: string | null,
    textEditor?: string | null,
    options:  Array< {
      __typename: "option",
      isPartialCorrect: boolean,
      correctAnswer: boolean,
      optionNumber?: number | null,
      weightage: number,
      answer: string,
      negMarks?: number | null,
      splitMarksEqually?: string | null,
      fullMarksIfAnyCorrect?: string | null,
      fullMarksOnlyIfAllCorrect?: string | null,
    } | null >,
    solution:  Array< {
      __typename: "solution",
      answer: string,
      optionNumber?: number | null,
      bestSolution: boolean,
    } | null >,
    hint:  Array< {
      __typename: "hint",
      optionNumber?: number | null,
      hint?: string | null,
    } | null >,
    groups?: Array< string | null > | null,
    media: string,
    questionName?: string | null,
    wordLimit?: number | null,
    internalKeywords?: Array< string | null > | null,
    externalKeywords?: Array< string | null > | null,
    videoSolution?: string | null,
    competency?:  Array< {
      __typename: "competency",
      progSub: string,
      progTopic: string,
      progLevel: string,
    } | null > | null,
    subTopic?: string | null,
    concepts?: string | null,
    adminID: string,
    userID: string,
    blanksCount?: number | null,
    caseSensitive?: boolean | null,
    QuesDependency?: string | null,
    fillUpanswer?:  Array< {
      __typename: "answer",
      splitMarksEqually?: string | null,
      weightage?: number | null,
      answer?: string | null,
      alternateAns?: Array< string | null > | null,
    } | null > | null,
    languages?: Array< string | null > | null,
    SingleLanguage?: string | null,
    inputFormat?: string | null,
    outputFormat?: string | null,
    enableCustomInput?: boolean | null,
    enableAPITesting?: boolean | null,
    codeConstraints?: string | null,
    evaluationTime?: boolean | null,
    timeLimit?: string | null,
    memoryLimit?: string | null,
    outputLimit?: string | null,
    codeSize?: string | null,
    sample?:  Array< {
      __typename: "solution",
      answer: string,
      optionNumber?: number | null,
      bestSolution: boolean,
    } | null > | null,
    backgroundImg?: string | null,
    initialQuery?: string | null,
    fileCount?: number | null,
    fileCountMandatory?: boolean | null,
    fileFormats?: Array< string | null > | null,
    enableAutoRecord?: boolean | null,
    minRecording?: number | null,
    maxRecording?: number | null,
    attemptsToRecord?: number | null,
    autoEvaluation?: boolean | null,
    cloudProvider?: string | null,
    startTime?: number | null,
    ZipFile?: string | null,
    themes?: Array< string | null > | null,
    fileSizes?: Array< string | null > | null,
    techStack?: string | null,
    instanceSize?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQuestionsMutationVariables = {
  input: DeleteQuestionsInput,
  condition?: ModelQuestionsConditionInput | null,
};

export type DeleteQuestionsMutation = {
  deleteQuestions?:  {
    __typename: "Questions",
    id: string,
    questionBankID: string,
    questionType: string,
    questionSubType: string,
    subject: string,
    difficulty: string,
    topic: string,
    directions?: string | null,
    codeEditor?: string | null,
    textEditor?: string | null,
    options:  Array< {
      __typename: "option",
      isPartialCorrect: boolean,
      correctAnswer: boolean,
      optionNumber?: number | null,
      weightage: number,
      answer: string,
      negMarks?: number | null,
      splitMarksEqually?: string | null,
      fullMarksIfAnyCorrect?: string | null,
      fullMarksOnlyIfAllCorrect?: string | null,
    } | null >,
    solution:  Array< {
      __typename: "solution",
      answer: string,
      optionNumber?: number | null,
      bestSolution: boolean,
    } | null >,
    hint:  Array< {
      __typename: "hint",
      optionNumber?: number | null,
      hint?: string | null,
    } | null >,
    groups?: Array< string | null > | null,
    media: string,
    questionName?: string | null,
    wordLimit?: number | null,
    internalKeywords?: Array< string | null > | null,
    externalKeywords?: Array< string | null > | null,
    videoSolution?: string | null,
    competency?:  Array< {
      __typename: "competency",
      progSub: string,
      progTopic: string,
      progLevel: string,
    } | null > | null,
    subTopic?: string | null,
    concepts?: string | null,
    adminID: string,
    userID: string,
    blanksCount?: number | null,
    caseSensitive?: boolean | null,
    QuesDependency?: string | null,
    fillUpanswer?:  Array< {
      __typename: "answer",
      splitMarksEqually?: string | null,
      weightage?: number | null,
      answer?: string | null,
      alternateAns?: Array< string | null > | null,
    } | null > | null,
    languages?: Array< string | null > | null,
    SingleLanguage?: string | null,
    inputFormat?: string | null,
    outputFormat?: string | null,
    enableCustomInput?: boolean | null,
    enableAPITesting?: boolean | null,
    codeConstraints?: string | null,
    evaluationTime?: boolean | null,
    timeLimit?: string | null,
    memoryLimit?: string | null,
    outputLimit?: string | null,
    codeSize?: string | null,
    sample?:  Array< {
      __typename: "solution",
      answer: string,
      optionNumber?: number | null,
      bestSolution: boolean,
    } | null > | null,
    backgroundImg?: string | null,
    initialQuery?: string | null,
    fileCount?: number | null,
    fileCountMandatory?: boolean | null,
    fileFormats?: Array< string | null > | null,
    enableAutoRecord?: boolean | null,
    minRecording?: number | null,
    maxRecording?: number | null,
    attemptsToRecord?: number | null,
    autoEvaluation?: boolean | null,
    cloudProvider?: string | null,
    startTime?: number | null,
    ZipFile?: string | null,
    themes?: Array< string | null > | null,
    fileSizes?: Array< string | null > | null,
    techStack?: string | null,
    instanceSize?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateContentBankDetailsMutationVariables = {
  input: CreateContentBankDetailsInput,
  condition?: ModelContentBankDetailsConditionInput | null,
};

export type CreateContentBankDetailsMutation = {
  createContentBankDetails?:  {
    __typename: "ContentBankDetails",
    id: string,
    name: string,
    description: string,
    adminID: string,
    visibility: string,
    department: string,
    Groups: Array< string | null >,
    userID: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContentBankDetailsMutationVariables = {
  input: UpdateContentBankDetailsInput,
  condition?: ModelContentBankDetailsConditionInput | null,
};

export type UpdateContentBankDetailsMutation = {
  updateContentBankDetails?:  {
    __typename: "ContentBankDetails",
    id: string,
    name: string,
    description: string,
    adminID: string,
    visibility: string,
    department: string,
    Groups: Array< string | null >,
    userID: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContentBankDetailsMutationVariables = {
  input: DeleteContentBankDetailsInput,
  condition?: ModelContentBankDetailsConditionInput | null,
};

export type DeleteContentBankDetailsMutation = {
  deleteContentBankDetails?:  {
    __typename: "ContentBankDetails",
    id: string,
    name: string,
    description: string,
    adminID: string,
    visibility: string,
    department: string,
    Groups: Array< string | null >,
    userID: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateContentMutationVariables = {
  input: CreateContentInput,
  condition?: ModelContentConditionInput | null,
};

export type CreateContentMutation = {
  createContent?:  {
    __typename: "content",
    id: string,
    contentBankID: string,
    contentType: string,
    contentsubType: string,
    contentName: string,
    subTopic: string,
    topic: string,
    subject: string,
    content: string,
    averageReadTime: string,
    groups: Array< string | null >,
    additionalInformation: string,
    adminID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContentMutationVariables = {
  input: UpdateContentInput,
  condition?: ModelContentConditionInput | null,
};

export type UpdateContentMutation = {
  updateContent?:  {
    __typename: "content",
    id: string,
    contentBankID: string,
    contentType: string,
    contentsubType: string,
    contentName: string,
    subTopic: string,
    topic: string,
    subject: string,
    content: string,
    averageReadTime: string,
    groups: Array< string | null >,
    additionalInformation: string,
    adminID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContentMutationVariables = {
  input: DeleteContentInput,
  condition?: ModelContentConditionInput | null,
};

export type DeleteContentMutation = {
  deleteContent?:  {
    __typename: "content",
    id: string,
    contentBankID: string,
    contentType: string,
    contentsubType: string,
    contentName: string,
    subTopic: string,
    topic: string,
    subject: string,
    content: string,
    averageReadTime: string,
    groups: Array< string | null >,
    additionalInformation: string,
    adminID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMyTable2MutationVariables = {
  input: CreateMyTable2Input,
  condition?: ModelMyTable2ConditionInput | null,
};

export type CreateMyTable2Mutation = {
  createMyTable2?:  {
    __typename: "myTable2",
    id: string,
    title: string,
    gender: string,
    address: string,
    age: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMyTable2MutationVariables = {
  input: UpdateMyTable2Input,
  condition?: ModelMyTable2ConditionInput | null,
};

export type UpdateMyTable2Mutation = {
  updateMyTable2?:  {
    __typename: "myTable2",
    id: string,
    title: string,
    gender: string,
    address: string,
    age: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMyTable2MutationVariables = {
  input: DeleteMyTable2Input,
  condition?: ModelMyTable2ConditionInput | null,
};

export type DeleteMyTable2Mutation = {
  deleteMyTable2?:  {
    __typename: "myTable2",
    id: string,
    title: string,
    gender: string,
    address: string,
    age: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCourseMutationVariables = {
  input: CreateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type CreateCourseMutation = {
  createCourse?:  {
    __typename: "course",
    id: string,
    title: string,
    price: string,
    about: string,
    file: string,
    user_id: string,
    adminID: string,
    courseCode: string,
    validity:  {
      __typename: "Validity",
      fromTime: string,
      toTime: string,
    },
    description: string,
    leaderBoard: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCourseMutationVariables = {
  input: UpdateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type UpdateCourseMutation = {
  updateCourse?:  {
    __typename: "course",
    id: string,
    title: string,
    price: string,
    about: string,
    file: string,
    user_id: string,
    adminID: string,
    courseCode: string,
    validity:  {
      __typename: "Validity",
      fromTime: string,
      toTime: string,
    },
    description: string,
    leaderBoard: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCourseMutationVariables = {
  input: DeleteCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type DeleteCourseMutation = {
  deleteCourse?:  {
    __typename: "course",
    id: string,
    title: string,
    price: string,
    about: string,
    file: string,
    user_id: string,
    adminID: string,
    courseCode: string,
    validity:  {
      __typename: "Validity",
      fromTime: string,
      toTime: string,
    },
    description: string,
    leaderBoard: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTopicMutationVariables = {
  input: CreateTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type CreateTopicMutation = {
  createTopic?:  {
    __typename: "topic",
    id: string,
    name: string,
    status: number,
    userID: string,
    adminID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTopicMutationVariables = {
  input: UpdateTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type UpdateTopicMutation = {
  updateTopic?:  {
    __typename: "topic",
    id: string,
    name: string,
    status: number,
    userID: string,
    adminID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTopicMutationVariables = {
  input: DeleteTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type DeleteTopicMutation = {
  deleteTopic?:  {
    __typename: "topic",
    id: string,
    name: string,
    status: number,
    userID: string,
    adminID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSubTopicMutationVariables = {
  input: CreateSubTopicInput,
  condition?: ModelSubTopicConditionInput | null,
};

export type CreateSubTopicMutation = {
  createSubTopic?:  {
    __typename: "subTopic",
    id: string,
    topicID: string,
    name: string,
    subject: string,
    status: number,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSubTopicMutationVariables = {
  input: UpdateSubTopicInput,
  condition?: ModelSubTopicConditionInput | null,
};

export type UpdateSubTopicMutation = {
  updateSubTopic?:  {
    __typename: "subTopic",
    id: string,
    topicID: string,
    name: string,
    subject: string,
    status: number,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSubTopicMutationVariables = {
  input: DeleteSubTopicInput,
  condition?: ModelSubTopicConditionInput | null,
};

export type DeleteSubTopicMutation = {
  deleteSubTopic?:  {
    __typename: "subTopic",
    id: string,
    topicID: string,
    name: string,
    subject: string,
    status: number,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGroupMutationVariables = {
  input: CreateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type CreateGroupMutation = {
  createGroup?:  {
    __typename: "group",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGroupMutationVariables = {
  input: UpdateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type UpdateGroupMutation = {
  updateGroup?:  {
    __typename: "group",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGroupMutationVariables = {
  input: DeleteGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type DeleteGroupMutation = {
  deleteGroup?:  {
    __typename: "group",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateThemesMutationVariables = {
  input: CreateThemesInput,
  condition?: ModelThemesConditionInput | null,
};

export type CreateThemesMutation = {
  createThemes?:  {
    __typename: "themes",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateThemesMutationVariables = {
  input: UpdateThemesInput,
  condition?: ModelThemesConditionInput | null,
};

export type UpdateThemesMutation = {
  updateThemes?:  {
    __typename: "themes",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteThemesMutationVariables = {
  input: DeleteThemesInput,
  condition?: ModelThemesConditionInput | null,
};

export type DeleteThemesMutation = {
  deleteThemes?:  {
    __typename: "themes",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateInternalKeywordsMutationVariables = {
  input: CreateInternalKeywordsInput,
  condition?: ModelInternalKeywordsConditionInput | null,
};

export type CreateInternalKeywordsMutation = {
  createInternalKeywords?:  {
    __typename: "InternalKeywords",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInternalKeywordsMutationVariables = {
  input: UpdateInternalKeywordsInput,
  condition?: ModelInternalKeywordsConditionInput | null,
};

export type UpdateInternalKeywordsMutation = {
  updateInternalKeywords?:  {
    __typename: "InternalKeywords",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInternalKeywordsMutationVariables = {
  input: DeleteInternalKeywordsInput,
  condition?: ModelInternalKeywordsConditionInput | null,
};

export type DeleteInternalKeywordsMutation = {
  deleteInternalKeywords?:  {
    __typename: "InternalKeywords",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateExternalKeywordsMutationVariables = {
  input: CreateExternalKeywordsInput,
  condition?: ModelExternalKeywordsConditionInput | null,
};

export type CreateExternalKeywordsMutation = {
  createExternalKeywords?:  {
    __typename: "ExternalKeywords",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateExternalKeywordsMutationVariables = {
  input: UpdateExternalKeywordsInput,
  condition?: ModelExternalKeywordsConditionInput | null,
};

export type UpdateExternalKeywordsMutation = {
  updateExternalKeywords?:  {
    __typename: "ExternalKeywords",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteExternalKeywordsMutationVariables = {
  input: DeleteExternalKeywordsInput,
  condition?: ModelExternalKeywordsConditionInput | null,
};

export type DeleteExternalKeywordsMutation = {
  deleteExternalKeywords?:  {
    __typename: "ExternalKeywords",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLanguageMutationVariables = {
  input: CreateLanguageInput,
  condition?: ModelLanguageConditionInput | null,
};

export type CreateLanguageMutation = {
  createLanguage?:  {
    __typename: "Language",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLanguageMutationVariables = {
  input: UpdateLanguageInput,
  condition?: ModelLanguageConditionInput | null,
};

export type UpdateLanguageMutation = {
  updateLanguage?:  {
    __typename: "Language",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLanguageMutationVariables = {
  input: DeleteLanguageInput,
  condition?: ModelLanguageConditionInput | null,
};

export type DeleteLanguageMutation = {
  deleteLanguage?:  {
    __typename: "Language",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBatchMutationVariables = {
  input: CreateBatchInput,
  condition?: ModelBatchConditionInput | null,
};

export type CreateBatchMutation = {
  createBatch?:  {
    __typename: "batch",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBatchMutationVariables = {
  input: UpdateBatchInput,
  condition?: ModelBatchConditionInput | null,
};

export type UpdateBatchMutation = {
  updateBatch?:  {
    __typename: "batch",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBatchMutationVariables = {
  input: DeleteBatchInput,
  condition?: ModelBatchConditionInput | null,
};

export type DeleteBatchMutation = {
  deleteBatch?:  {
    __typename: "batch",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSpecializationMutationVariables = {
  input: CreateSpecializationInput,
  condition?: ModelSpecializationConditionInput | null,
};

export type CreateSpecializationMutation = {
  createSpecialization?:  {
    __typename: "specialization",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSpecializationMutationVariables = {
  input: UpdateSpecializationInput,
  condition?: ModelSpecializationConditionInput | null,
};

export type UpdateSpecializationMutation = {
  updateSpecialization?:  {
    __typename: "specialization",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSpecializationMutationVariables = {
  input: DeleteSpecializationInput,
  condition?: ModelSpecializationConditionInput | null,
};

export type DeleteSpecializationMutation = {
  deleteSpecialization?:  {
    __typename: "specialization",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDepartmentMutationVariables = {
  input: CreateDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type CreateDepartmentMutation = {
  createDepartment?:  {
    __typename: "department",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDepartmentMutationVariables = {
  input: UpdateDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type UpdateDepartmentMutation = {
  updateDepartment?:  {
    __typename: "department",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDepartmentMutationVariables = {
  input: DeleteDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type DeleteDepartmentMutation = {
  deleteDepartment?:  {
    __typename: "department",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTechStackMutationVariables = {
  input: CreateTechStackInput,
  condition?: ModelTechStackConditionInput | null,
};

export type CreateTechStackMutation = {
  createTechStack?:  {
    __typename: "techStack",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTechStackMutationVariables = {
  input: UpdateTechStackInput,
  condition?: ModelTechStackConditionInput | null,
};

export type UpdateTechStackMutation = {
  updateTechStack?:  {
    __typename: "techStack",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTechStackMutationVariables = {
  input: DeleteTechStackInput,
  condition?: ModelTechStackConditionInput | null,
};

export type DeleteTechStackMutation = {
  deleteTechStack?:  {
    __typename: "techStack",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateInstanceSizeMutationVariables = {
  input: CreateInstanceSizeInput,
  condition?: ModelInstanceSizeConditionInput | null,
};

export type CreateInstanceSizeMutation = {
  createInstanceSize?:  {
    __typename: "instanceSize",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInstanceSizeMutationVariables = {
  input: UpdateInstanceSizeInput,
  condition?: ModelInstanceSizeConditionInput | null,
};

export type UpdateInstanceSizeMutation = {
  updateInstanceSize?:  {
    __typename: "instanceSize",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInstanceSizeMutationVariables = {
  input: DeleteInstanceSizeInput,
  condition?: ModelInstanceSizeConditionInput | null,
};

export type DeleteInstanceSizeMutation = {
  deleteInstanceSize?:  {
    __typename: "instanceSize",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProgrammerSubjectMutationVariables = {
  input: CreateProgrammerSubjectInput,
  condition?: ModelProgrammerSubjectConditionInput | null,
};

export type CreateProgrammerSubjectMutation = {
  createProgrammerSubject?:  {
    __typename: "programmerSubject",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProgrammerSubjectMutationVariables = {
  input: UpdateProgrammerSubjectInput,
  condition?: ModelProgrammerSubjectConditionInput | null,
};

export type UpdateProgrammerSubjectMutation = {
  updateProgrammerSubject?:  {
    __typename: "programmerSubject",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProgrammerSubjectMutationVariables = {
  input: DeleteProgrammerSubjectInput,
  condition?: ModelProgrammerSubjectConditionInput | null,
};

export type DeleteProgrammerSubjectMutation = {
  deleteProgrammerSubject?:  {
    __typename: "programmerSubject",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProgrammerTopicMutationVariables = {
  input: CreateProgrammerTopicInput,
  condition?: ModelProgrammerTopicConditionInput | null,
};

export type CreateProgrammerTopicMutation = {
  createProgrammerTopic?:  {
    __typename: "programmerTopic",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProgrammerTopicMutationVariables = {
  input: UpdateProgrammerTopicInput,
  condition?: ModelProgrammerTopicConditionInput | null,
};

export type UpdateProgrammerTopicMutation = {
  updateProgrammerTopic?:  {
    __typename: "programmerTopic",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProgrammerTopicMutationVariables = {
  input: DeleteProgrammerTopicInput,
  condition?: ModelProgrammerTopicConditionInput | null,
};

export type DeleteProgrammerTopicMutation = {
  deleteProgrammerTopic?:  {
    __typename: "programmerTopic",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProgrammerLevelMutationVariables = {
  input: CreateProgrammerLevelInput,
  condition?: ModelProgrammerLevelConditionInput | null,
};

export type CreateProgrammerLevelMutation = {
  createProgrammerLevel?:  {
    __typename: "programmerLevel",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProgrammerLevelMutationVariables = {
  input: UpdateProgrammerLevelInput,
  condition?: ModelProgrammerLevelConditionInput | null,
};

export type UpdateProgrammerLevelMutation = {
  updateProgrammerLevel?:  {
    __typename: "programmerLevel",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProgrammerLevelMutationVariables = {
  input: DeleteProgrammerLevelInput,
  condition?: ModelProgrammerLevelConditionInput | null,
};

export type DeleteProgrammerLevelMutation = {
  deleteProgrammerLevel?:  {
    __typename: "programmerLevel",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBlogMutationVariables = {
  input: CreateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type CreateBlogMutation = {
  createBlog?:  {
    __typename: "blog",
    id: string,
    catergory?: Array< string | null > | null,
    title: string,
    description: string,
    status: number,
    userID: string,
    adminID: string,
    hodID: string,
    tutorID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBlogMutationVariables = {
  input: UpdateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type UpdateBlogMutation = {
  updateBlog?:  {
    __typename: "blog",
    id: string,
    catergory?: Array< string | null > | null,
    title: string,
    description: string,
    status: number,
    userID: string,
    adminID: string,
    hodID: string,
    tutorID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBlogMutationVariables = {
  input: DeleteBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type DeleteBlogMutation = {
  deleteBlog?:  {
    __typename: "blog",
    id: string,
    catergory?: Array< string | null > | null,
    title: string,
    description: string,
    status: number,
    userID: string,
    adminID: string,
    hodID: string,
    tutorID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "user",
    id: string,
    email: string,
    password: string,
    MobNumber: string,
    username: string,
    role: string,
    status: number,
    permissions?:  {
      __typename: "Permissions",
      Jobs:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Courses:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Exams:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Results:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      QuestionBank:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Questions:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      ContentBank:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Content:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Groups:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Tests:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Drives:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Student:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Reports:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      StudentApprove:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      StudentReject:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Tutor:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Attendance:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      LeaderBoard:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
    } | null,
    adminID: string,
    type?: string | null,
    uploadType?: string | null,
    Groups?: Array< string | null > | null,
    userID?: string | null,
    organisation?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    Batch?: string | null,
    department?: Array< string | null > | null,
    specialization?: string | null,
    course?: Array< string | null > | null,
    resume?: string | null,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "user",
    id: string,
    email: string,
    password: string,
    MobNumber: string,
    username: string,
    role: string,
    status: number,
    permissions?:  {
      __typename: "Permissions",
      Jobs:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Courses:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Exams:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Results:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      QuestionBank:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Questions:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      ContentBank:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Content:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Groups:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Tests:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Drives:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Student:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Reports:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      StudentApprove:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      StudentReject:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Tutor:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Attendance:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      LeaderBoard:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
    } | null,
    adminID: string,
    type?: string | null,
    uploadType?: string | null,
    Groups?: Array< string | null > | null,
    userID?: string | null,
    organisation?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    Batch?: string | null,
    department?: Array< string | null > | null,
    specialization?: string | null,
    course?: Array< string | null > | null,
    resume?: string | null,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "user",
    id: string,
    email: string,
    password: string,
    MobNumber: string,
    username: string,
    role: string,
    status: number,
    permissions?:  {
      __typename: "Permissions",
      Jobs:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Courses:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Exams:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Results:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      QuestionBank:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Questions:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      ContentBank:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Content:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Groups:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Tests:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Drives:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Student:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Reports:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      StudentApprove:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      StudentReject:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Tutor:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Attendance:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      LeaderBoard:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
    } | null,
    adminID: string,
    type?: string | null,
    uploadType?: string | null,
    Groups?: Array< string | null > | null,
    userID?: string | null,
    organisation?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    Batch?: string | null,
    department?: Array< string | null > | null,
    specialization?: string | null,
    course?: Array< string | null > | null,
    resume?: string | null,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetMyTable3QueryVariables = {
  id: string,
};

export type GetMyTable3Query = {
  getMyTable3?:  {
    __typename: "myTable3",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMyTable3sQueryVariables = {
  filter?: ModelMyTable3FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMyTable3sQuery = {
  listMyTable3s?:  {
    __typename: "ModelMyTable3Connection",
    items:  Array< {
      __typename: "myTable3",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSample123QueryVariables = {
  id: string,
};

export type GetSample123Query = {
  getSample123?:  {
    __typename: "sample123",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSample123sQueryVariables = {
  filter?: ModelSample123FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSample123sQuery = {
  listSample123s?:  {
    __typename: "ModelSample123Connection",
    items:  Array< {
      __typename: "sample123",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetQuestionBankDetailsQueryVariables = {
  id: string,
};

export type GetQuestionBankDetailsQuery = {
  getQuestionBankDetails?:  {
    __typename: "QuestionBankDetails",
    id: string,
    name: string,
    code: string,
    description: string,
    adminID?: string | null,
    visibility: string,
    department: string,
    Groups: Array< string | null >,
    userID: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQuestionBankDetailsQueryVariables = {
  filter?: ModelQuestionBankDetailsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestionBankDetailsQuery = {
  listQuestionBankDetails?:  {
    __typename: "ModelQuestionBankDetailsConnection",
    items:  Array< {
      __typename: "QuestionBankDetails",
      id: string,
      name: string,
      code: string,
      description: string,
      adminID?: string | null,
      visibility: string,
      department: string,
      Groups: Array< string | null >,
      userID: string,
      status: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetQuestionsQueryVariables = {
  id: string,
};

export type GetQuestionsQuery = {
  getQuestions?:  {
    __typename: "Questions",
    id: string,
    questionBankID: string,
    questionType: string,
    questionSubType: string,
    subject: string,
    difficulty: string,
    topic: string,
    directions?: string | null,
    codeEditor?: string | null,
    textEditor?: string | null,
    options:  Array< {
      __typename: "option",
      isPartialCorrect: boolean,
      correctAnswer: boolean,
      optionNumber?: number | null,
      weightage: number,
      answer: string,
      negMarks?: number | null,
      splitMarksEqually?: string | null,
      fullMarksIfAnyCorrect?: string | null,
      fullMarksOnlyIfAllCorrect?: string | null,
    } | null >,
    solution:  Array< {
      __typename: "solution",
      answer: string,
      optionNumber?: number | null,
      bestSolution: boolean,
    } | null >,
    hint:  Array< {
      __typename: "hint",
      optionNumber?: number | null,
      hint?: string | null,
    } | null >,
    groups?: Array< string | null > | null,
    media: string,
    questionName?: string | null,
    wordLimit?: number | null,
    internalKeywords?: Array< string | null > | null,
    externalKeywords?: Array< string | null > | null,
    videoSolution?: string | null,
    competency?:  Array< {
      __typename: "competency",
      progSub: string,
      progTopic: string,
      progLevel: string,
    } | null > | null,
    subTopic?: string | null,
    concepts?: string | null,
    adminID: string,
    userID: string,
    blanksCount?: number | null,
    caseSensitive?: boolean | null,
    QuesDependency?: string | null,
    fillUpanswer?:  Array< {
      __typename: "answer",
      splitMarksEqually?: string | null,
      weightage?: number | null,
      answer?: string | null,
      alternateAns?: Array< string | null > | null,
    } | null > | null,
    languages?: Array< string | null > | null,
    SingleLanguage?: string | null,
    inputFormat?: string | null,
    outputFormat?: string | null,
    enableCustomInput?: boolean | null,
    enableAPITesting?: boolean | null,
    codeConstraints?: string | null,
    evaluationTime?: boolean | null,
    timeLimit?: string | null,
    memoryLimit?: string | null,
    outputLimit?: string | null,
    codeSize?: string | null,
    sample?:  Array< {
      __typename: "solution",
      answer: string,
      optionNumber?: number | null,
      bestSolution: boolean,
    } | null > | null,
    backgroundImg?: string | null,
    initialQuery?: string | null,
    fileCount?: number | null,
    fileCountMandatory?: boolean | null,
    fileFormats?: Array< string | null > | null,
    enableAutoRecord?: boolean | null,
    minRecording?: number | null,
    maxRecording?: number | null,
    attemptsToRecord?: number | null,
    autoEvaluation?: boolean | null,
    cloudProvider?: string | null,
    startTime?: number | null,
    ZipFile?: string | null,
    themes?: Array< string | null > | null,
    fileSizes?: Array< string | null > | null,
    techStack?: string | null,
    instanceSize?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQuestionsQueryVariables = {
  filter?: ModelQuestionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestionsQuery = {
  listQuestions?:  {
    __typename: "ModelQuestionsConnection",
    items:  Array< {
      __typename: "Questions",
      id: string,
      questionBankID: string,
      questionType: string,
      questionSubType: string,
      subject: string,
      difficulty: string,
      topic: string,
      directions?: string | null,
      codeEditor?: string | null,
      textEditor?: string | null,
      options:  Array< {
        __typename: "option",
        isPartialCorrect: boolean,
        correctAnswer: boolean,
        optionNumber?: number | null,
        weightage: number,
        answer: string,
        negMarks?: number | null,
        splitMarksEqually?: string | null,
        fullMarksIfAnyCorrect?: string | null,
        fullMarksOnlyIfAllCorrect?: string | null,
      } | null >,
      solution:  Array< {
        __typename: "solution",
        answer: string,
        optionNumber?: number | null,
        bestSolution: boolean,
      } | null >,
      hint:  Array< {
        __typename: "hint",
        optionNumber?: number | null,
        hint?: string | null,
      } | null >,
      groups?: Array< string | null > | null,
      media: string,
      questionName?: string | null,
      wordLimit?: number | null,
      internalKeywords?: Array< string | null > | null,
      externalKeywords?: Array< string | null > | null,
      videoSolution?: string | null,
      competency?:  Array< {
        __typename: "competency",
        progSub: string,
        progTopic: string,
        progLevel: string,
      } | null > | null,
      subTopic?: string | null,
      concepts?: string | null,
      adminID: string,
      userID: string,
      blanksCount?: number | null,
      caseSensitive?: boolean | null,
      QuesDependency?: string | null,
      fillUpanswer?:  Array< {
        __typename: "answer",
        splitMarksEqually?: string | null,
        weightage?: number | null,
        answer?: string | null,
        alternateAns?: Array< string | null > | null,
      } | null > | null,
      languages?: Array< string | null > | null,
      SingleLanguage?: string | null,
      inputFormat?: string | null,
      outputFormat?: string | null,
      enableCustomInput?: boolean | null,
      enableAPITesting?: boolean | null,
      codeConstraints?: string | null,
      evaluationTime?: boolean | null,
      timeLimit?: string | null,
      memoryLimit?: string | null,
      outputLimit?: string | null,
      codeSize?: string | null,
      sample?:  Array< {
        __typename: "solution",
        answer: string,
        optionNumber?: number | null,
        bestSolution: boolean,
      } | null > | null,
      backgroundImg?: string | null,
      initialQuery?: string | null,
      fileCount?: number | null,
      fileCountMandatory?: boolean | null,
      fileFormats?: Array< string | null > | null,
      enableAutoRecord?: boolean | null,
      minRecording?: number | null,
      maxRecording?: number | null,
      attemptsToRecord?: number | null,
      autoEvaluation?: boolean | null,
      cloudProvider?: string | null,
      startTime?: number | null,
      ZipFile?: string | null,
      themes?: Array< string | null > | null,
      fileSizes?: Array< string | null > | null,
      techStack?: string | null,
      instanceSize?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetContentBankDetailsQueryVariables = {
  id: string,
};

export type GetContentBankDetailsQuery = {
  getContentBankDetails?:  {
    __typename: "ContentBankDetails",
    id: string,
    name: string,
    description: string,
    adminID: string,
    visibility: string,
    department: string,
    Groups: Array< string | null >,
    userID: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContentBankDetailsQueryVariables = {
  filter?: ModelContentBankDetailsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContentBankDetailsQuery = {
  listContentBankDetails?:  {
    __typename: "ModelContentBankDetailsConnection",
    items:  Array< {
      __typename: "ContentBankDetails",
      id: string,
      name: string,
      description: string,
      adminID: string,
      visibility: string,
      department: string,
      Groups: Array< string | null >,
      userID: string,
      status: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetContentQueryVariables = {
  id: string,
};

export type GetContentQuery = {
  getContent?:  {
    __typename: "content",
    id: string,
    contentBankID: string,
    contentType: string,
    contentsubType: string,
    contentName: string,
    subTopic: string,
    topic: string,
    subject: string,
    content: string,
    averageReadTime: string,
    groups: Array< string | null >,
    additionalInformation: string,
    adminID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContentsQueryVariables = {
  filter?: ModelContentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContentsQuery = {
  listContents?:  {
    __typename: "ModelContentConnection",
    items:  Array< {
      __typename: "content",
      id: string,
      contentBankID: string,
      contentType: string,
      contentsubType: string,
      contentName: string,
      subTopic: string,
      topic: string,
      subject: string,
      content: string,
      averageReadTime: string,
      groups: Array< string | null >,
      additionalInformation: string,
      adminID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMyTable2QueryVariables = {
  id: string,
};

export type GetMyTable2Query = {
  getMyTable2?:  {
    __typename: "myTable2",
    id: string,
    title: string,
    gender: string,
    address: string,
    age: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMyTable2sQueryVariables = {
  filter?: ModelMyTable2FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMyTable2sQuery = {
  listMyTable2s?:  {
    __typename: "ModelMyTable2Connection",
    items:  Array< {
      __typename: "myTable2",
      id: string,
      title: string,
      gender: string,
      address: string,
      age: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCourseQueryVariables = {
  id: string,
};

export type GetCourseQuery = {
  getCourse?:  {
    __typename: "course",
    id: string,
    title: string,
    price: string,
    about: string,
    file: string,
    user_id: string,
    adminID: string,
    courseCode: string,
    validity:  {
      __typename: "Validity",
      fromTime: string,
      toTime: string,
    },
    description: string,
    leaderBoard: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCoursesQueryVariables = {
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoursesQuery = {
  listCourses?:  {
    __typename: "ModelCourseConnection",
    items:  Array< {
      __typename: "course",
      id: string,
      title: string,
      price: string,
      about: string,
      file: string,
      user_id: string,
      adminID: string,
      courseCode: string,
      validity:  {
        __typename: "Validity",
        fromTime: string,
        toTime: string,
      },
      description: string,
      leaderBoard: string,
      status: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTopicQueryVariables = {
  id: string,
};

export type GetTopicQuery = {
  getTopic?:  {
    __typename: "topic",
    id: string,
    name: string,
    status: number,
    userID: string,
    adminID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTopicsQueryVariables = {
  filter?: ModelTopicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTopicsQuery = {
  listTopics?:  {
    __typename: "ModelTopicConnection",
    items:  Array< {
      __typename: "topic",
      id: string,
      name: string,
      status: number,
      userID: string,
      adminID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSubTopicQueryVariables = {
  id: string,
};

export type GetSubTopicQuery = {
  getSubTopic?:  {
    __typename: "subTopic",
    id: string,
    topicID: string,
    name: string,
    subject: string,
    status: number,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSubTopicsQueryVariables = {
  filter?: ModelSubTopicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubTopicsQuery = {
  listSubTopics?:  {
    __typename: "ModelSubTopicConnection",
    items:  Array< {
      __typename: "subTopic",
      id: string,
      topicID: string,
      name: string,
      subject: string,
      status: number,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGroupQueryVariables = {
  id: string,
};

export type GetGroupQuery = {
  getGroup?:  {
    __typename: "group",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGroupsQueryVariables = {
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupsQuery = {
  listGroups?:  {
    __typename: "ModelGroupConnection",
    items:  Array< {
      __typename: "group",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetThemesQueryVariables = {
  id: string,
};

export type GetThemesQuery = {
  getThemes?:  {
    __typename: "themes",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListThemesQueryVariables = {
  filter?: ModelThemesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListThemesQuery = {
  listThemes?:  {
    __typename: "ModelThemesConnection",
    items:  Array< {
      __typename: "themes",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInternalKeywordsQueryVariables = {
  id: string,
};

export type GetInternalKeywordsQuery = {
  getInternalKeywords?:  {
    __typename: "InternalKeywords",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInternalKeywordsQueryVariables = {
  filter?: ModelInternalKeywordsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInternalKeywordsQuery = {
  listInternalKeywords?:  {
    __typename: "ModelInternalKeywordsConnection",
    items:  Array< {
      __typename: "InternalKeywords",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetExternalKeywordsQueryVariables = {
  id: string,
};

export type GetExternalKeywordsQuery = {
  getExternalKeywords?:  {
    __typename: "ExternalKeywords",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListExternalKeywordsQueryVariables = {
  filter?: ModelExternalKeywordsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExternalKeywordsQuery = {
  listExternalKeywords?:  {
    __typename: "ModelExternalKeywordsConnection",
    items:  Array< {
      __typename: "ExternalKeywords",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLanguageQueryVariables = {
  id: string,
};

export type GetLanguageQuery = {
  getLanguage?:  {
    __typename: "Language",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLanguagesQueryVariables = {
  filter?: ModelLanguageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLanguagesQuery = {
  listLanguages?:  {
    __typename: "ModelLanguageConnection",
    items:  Array< {
      __typename: "Language",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBatchQueryVariables = {
  id: string,
};

export type GetBatchQuery = {
  getBatch?:  {
    __typename: "batch",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBatchesQueryVariables = {
  filter?: ModelBatchFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBatchesQuery = {
  listBatches?:  {
    __typename: "ModelBatchConnection",
    items:  Array< {
      __typename: "batch",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSpecializationQueryVariables = {
  id: string,
};

export type GetSpecializationQuery = {
  getSpecialization?:  {
    __typename: "specialization",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSpecializationsQueryVariables = {
  filter?: ModelSpecializationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpecializationsQuery = {
  listSpecializations?:  {
    __typename: "ModelSpecializationConnection",
    items:  Array< {
      __typename: "specialization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDepartmentQueryVariables = {
  id: string,
};

export type GetDepartmentQuery = {
  getDepartment?:  {
    __typename: "department",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDepartmentsQueryVariables = {
  filter?: ModelDepartmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDepartmentsQuery = {
  listDepartments?:  {
    __typename: "ModelDepartmentConnection",
    items:  Array< {
      __typename: "department",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTechStackQueryVariables = {
  id: string,
};

export type GetTechStackQuery = {
  getTechStack?:  {
    __typename: "techStack",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTechStacksQueryVariables = {
  filter?: ModelTechStackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTechStacksQuery = {
  listTechStacks?:  {
    __typename: "ModelTechStackConnection",
    items:  Array< {
      __typename: "techStack",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInstanceSizeQueryVariables = {
  id: string,
};

export type GetInstanceSizeQuery = {
  getInstanceSize?:  {
    __typename: "instanceSize",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInstanceSizesQueryVariables = {
  filter?: ModelInstanceSizeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInstanceSizesQuery = {
  listInstanceSizes?:  {
    __typename: "ModelInstanceSizeConnection",
    items:  Array< {
      __typename: "instanceSize",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProgrammerSubjectQueryVariables = {
  id: string,
};

export type GetProgrammerSubjectQuery = {
  getProgrammerSubject?:  {
    __typename: "programmerSubject",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProgrammerSubjectsQueryVariables = {
  filter?: ModelProgrammerSubjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProgrammerSubjectsQuery = {
  listProgrammerSubjects?:  {
    __typename: "ModelProgrammerSubjectConnection",
    items:  Array< {
      __typename: "programmerSubject",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProgrammerTopicQueryVariables = {
  id: string,
};

export type GetProgrammerTopicQuery = {
  getProgrammerTopic?:  {
    __typename: "programmerTopic",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProgrammerTopicsQueryVariables = {
  filter?: ModelProgrammerTopicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProgrammerTopicsQuery = {
  listProgrammerTopics?:  {
    __typename: "ModelProgrammerTopicConnection",
    items:  Array< {
      __typename: "programmerTopic",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProgrammerLevelQueryVariables = {
  id: string,
};

export type GetProgrammerLevelQuery = {
  getProgrammerLevel?:  {
    __typename: "programmerLevel",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProgrammerLevelsQueryVariables = {
  filter?: ModelProgrammerLevelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProgrammerLevelsQuery = {
  listProgrammerLevels?:  {
    __typename: "ModelProgrammerLevelConnection",
    items:  Array< {
      __typename: "programmerLevel",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBlogQueryVariables = {
  id: string,
};

export type GetBlogQuery = {
  getBlog?:  {
    __typename: "blog",
    id: string,
    catergory?: Array< string | null > | null,
    title: string,
    description: string,
    status: number,
    userID: string,
    adminID: string,
    hodID: string,
    tutorID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBlogsQueryVariables = {
  filter?: ModelBlogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlogsQuery = {
  listBlogs?:  {
    __typename: "ModelBlogConnection",
    items:  Array< {
      __typename: "blog",
      id: string,
      catergory?: Array< string | null > | null,
      title: string,
      description: string,
      status: number,
      userID: string,
      adminID: string,
      hodID: string,
      tutorID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "user",
    id: string,
    email: string,
    password: string,
    MobNumber: string,
    username: string,
    role: string,
    status: number,
    permissions?:  {
      __typename: "Permissions",
      Jobs:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Courses:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Exams:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Results:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      QuestionBank:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Questions:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      ContentBank:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Content:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Groups:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Tests:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Drives:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Student:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Reports:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      StudentApprove:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      StudentReject:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Tutor:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Attendance:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      LeaderBoard:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
    } | null,
    adminID: string,
    type?: string | null,
    uploadType?: string | null,
    Groups?: Array< string | null > | null,
    userID?: string | null,
    organisation?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    Batch?: string | null,
    department?: Array< string | null > | null,
    specialization?: string | null,
    course?: Array< string | null > | null,
    resume?: string | null,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "user",
      id: string,
      email: string,
      password: string,
      MobNumber: string,
      username: string,
      role: string,
      status: number,
      permissions?:  {
        __typename: "Permissions",
      } | null,
      adminID: string,
      type?: string | null,
      uploadType?: string | null,
      Groups?: Array< string | null > | null,
      userID?: string | null,
      organisation?: string | null,
      hodID?: string | null,
      tutorID?: string | null,
      Batch?: string | null,
      department?: Array< string | null > | null,
      specialization?: string | null,
      course?: Array< string | null > | null,
      resume?: string | null,
      address?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMyTable3SubscriptionVariables = {
  filter?: ModelSubscriptionMyTable3FilterInput | null,
};

export type OnCreateMyTable3Subscription = {
  onCreateMyTable3?:  {
    __typename: "myTable3",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMyTable3SubscriptionVariables = {
  filter?: ModelSubscriptionMyTable3FilterInput | null,
};

export type OnUpdateMyTable3Subscription = {
  onUpdateMyTable3?:  {
    __typename: "myTable3",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMyTable3SubscriptionVariables = {
  filter?: ModelSubscriptionMyTable3FilterInput | null,
};

export type OnDeleteMyTable3Subscription = {
  onDeleteMyTable3?:  {
    __typename: "myTable3",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSample123SubscriptionVariables = {
  filter?: ModelSubscriptionSample123FilterInput | null,
};

export type OnCreateSample123Subscription = {
  onCreateSample123?:  {
    __typename: "sample123",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSample123SubscriptionVariables = {
  filter?: ModelSubscriptionSample123FilterInput | null,
};

export type OnUpdateSample123Subscription = {
  onUpdateSample123?:  {
    __typename: "sample123",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSample123SubscriptionVariables = {
  filter?: ModelSubscriptionSample123FilterInput | null,
};

export type OnDeleteSample123Subscription = {
  onDeleteSample123?:  {
    __typename: "sample123",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateQuestionBankDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionBankDetailsFilterInput | null,
};

export type OnCreateQuestionBankDetailsSubscription = {
  onCreateQuestionBankDetails?:  {
    __typename: "QuestionBankDetails",
    id: string,
    name: string,
    code: string,
    description: string,
    adminID?: string | null,
    visibility: string,
    department: string,
    Groups: Array< string | null >,
    userID: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuestionBankDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionBankDetailsFilterInput | null,
};

export type OnUpdateQuestionBankDetailsSubscription = {
  onUpdateQuestionBankDetails?:  {
    __typename: "QuestionBankDetails",
    id: string,
    name: string,
    code: string,
    description: string,
    adminID?: string | null,
    visibility: string,
    department: string,
    Groups: Array< string | null >,
    userID: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuestionBankDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionBankDetailsFilterInput | null,
};

export type OnDeleteQuestionBankDetailsSubscription = {
  onDeleteQuestionBankDetails?:  {
    __typename: "QuestionBankDetails",
    id: string,
    name: string,
    code: string,
    description: string,
    adminID?: string | null,
    visibility: string,
    department: string,
    Groups: Array< string | null >,
    userID: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateQuestionsSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionsFilterInput | null,
};

export type OnCreateQuestionsSubscription = {
  onCreateQuestions?:  {
    __typename: "Questions",
    id: string,
    questionBankID: string,
    questionType: string,
    questionSubType: string,
    subject: string,
    difficulty: string,
    topic: string,
    directions?: string | null,
    codeEditor?: string | null,
    textEditor?: string | null,
    options:  Array< {
      __typename: "option",
      isPartialCorrect: boolean,
      correctAnswer: boolean,
      optionNumber?: number | null,
      weightage: number,
      answer: string,
      negMarks?: number | null,
      splitMarksEqually?: string | null,
      fullMarksIfAnyCorrect?: string | null,
      fullMarksOnlyIfAllCorrect?: string | null,
    } | null >,
    solution:  Array< {
      __typename: "solution",
      answer: string,
      optionNumber?: number | null,
      bestSolution: boolean,
    } | null >,
    hint:  Array< {
      __typename: "hint",
      optionNumber?: number | null,
      hint?: string | null,
    } | null >,
    groups?: Array< string | null > | null,
    media: string,
    questionName?: string | null,
    wordLimit?: number | null,
    internalKeywords?: Array< string | null > | null,
    externalKeywords?: Array< string | null > | null,
    videoSolution?: string | null,
    competency?:  Array< {
      __typename: "competency",
      progSub: string,
      progTopic: string,
      progLevel: string,
    } | null > | null,
    subTopic?: string | null,
    concepts?: string | null,
    adminID: string,
    userID: string,
    blanksCount?: number | null,
    caseSensitive?: boolean | null,
    QuesDependency?: string | null,
    fillUpanswer?:  Array< {
      __typename: "answer",
      splitMarksEqually?: string | null,
      weightage?: number | null,
      answer?: string | null,
      alternateAns?: Array< string | null > | null,
    } | null > | null,
    languages?: Array< string | null > | null,
    SingleLanguage?: string | null,
    inputFormat?: string | null,
    outputFormat?: string | null,
    enableCustomInput?: boolean | null,
    enableAPITesting?: boolean | null,
    codeConstraints?: string | null,
    evaluationTime?: boolean | null,
    timeLimit?: string | null,
    memoryLimit?: string | null,
    outputLimit?: string | null,
    codeSize?: string | null,
    sample?:  Array< {
      __typename: "solution",
      answer: string,
      optionNumber?: number | null,
      bestSolution: boolean,
    } | null > | null,
    backgroundImg?: string | null,
    initialQuery?: string | null,
    fileCount?: number | null,
    fileCountMandatory?: boolean | null,
    fileFormats?: Array< string | null > | null,
    enableAutoRecord?: boolean | null,
    minRecording?: number | null,
    maxRecording?: number | null,
    attemptsToRecord?: number | null,
    autoEvaluation?: boolean | null,
    cloudProvider?: string | null,
    startTime?: number | null,
    ZipFile?: string | null,
    themes?: Array< string | null > | null,
    fileSizes?: Array< string | null > | null,
    techStack?: string | null,
    instanceSize?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuestionsSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionsFilterInput | null,
};

export type OnUpdateQuestionsSubscription = {
  onUpdateQuestions?:  {
    __typename: "Questions",
    id: string,
    questionBankID: string,
    questionType: string,
    questionSubType: string,
    subject: string,
    difficulty: string,
    topic: string,
    directions?: string | null,
    codeEditor?: string | null,
    textEditor?: string | null,
    options:  Array< {
      __typename: "option",
      isPartialCorrect: boolean,
      correctAnswer: boolean,
      optionNumber?: number | null,
      weightage: number,
      answer: string,
      negMarks?: number | null,
      splitMarksEqually?: string | null,
      fullMarksIfAnyCorrect?: string | null,
      fullMarksOnlyIfAllCorrect?: string | null,
    } | null >,
    solution:  Array< {
      __typename: "solution",
      answer: string,
      optionNumber?: number | null,
      bestSolution: boolean,
    } | null >,
    hint:  Array< {
      __typename: "hint",
      optionNumber?: number | null,
      hint?: string | null,
    } | null >,
    groups?: Array< string | null > | null,
    media: string,
    questionName?: string | null,
    wordLimit?: number | null,
    internalKeywords?: Array< string | null > | null,
    externalKeywords?: Array< string | null > | null,
    videoSolution?: string | null,
    competency?:  Array< {
      __typename: "competency",
      progSub: string,
      progTopic: string,
      progLevel: string,
    } | null > | null,
    subTopic?: string | null,
    concepts?: string | null,
    adminID: string,
    userID: string,
    blanksCount?: number | null,
    caseSensitive?: boolean | null,
    QuesDependency?: string | null,
    fillUpanswer?:  Array< {
      __typename: "answer",
      splitMarksEqually?: string | null,
      weightage?: number | null,
      answer?: string | null,
      alternateAns?: Array< string | null > | null,
    } | null > | null,
    languages?: Array< string | null > | null,
    SingleLanguage?: string | null,
    inputFormat?: string | null,
    outputFormat?: string | null,
    enableCustomInput?: boolean | null,
    enableAPITesting?: boolean | null,
    codeConstraints?: string | null,
    evaluationTime?: boolean | null,
    timeLimit?: string | null,
    memoryLimit?: string | null,
    outputLimit?: string | null,
    codeSize?: string | null,
    sample?:  Array< {
      __typename: "solution",
      answer: string,
      optionNumber?: number | null,
      bestSolution: boolean,
    } | null > | null,
    backgroundImg?: string | null,
    initialQuery?: string | null,
    fileCount?: number | null,
    fileCountMandatory?: boolean | null,
    fileFormats?: Array< string | null > | null,
    enableAutoRecord?: boolean | null,
    minRecording?: number | null,
    maxRecording?: number | null,
    attemptsToRecord?: number | null,
    autoEvaluation?: boolean | null,
    cloudProvider?: string | null,
    startTime?: number | null,
    ZipFile?: string | null,
    themes?: Array< string | null > | null,
    fileSizes?: Array< string | null > | null,
    techStack?: string | null,
    instanceSize?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuestionsSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionsFilterInput | null,
};

export type OnDeleteQuestionsSubscription = {
  onDeleteQuestions?:  {
    __typename: "Questions",
    id: string,
    questionBankID: string,
    questionType: string,
    questionSubType: string,
    subject: string,
    difficulty: string,
    topic: string,
    directions?: string | null,
    codeEditor?: string | null,
    textEditor?: string | null,
    options:  Array< {
      __typename: "option",
      isPartialCorrect: boolean,
      correctAnswer: boolean,
      optionNumber?: number | null,
      weightage: number,
      answer: string,
      negMarks?: number | null,
      splitMarksEqually?: string | null,
      fullMarksIfAnyCorrect?: string | null,
      fullMarksOnlyIfAllCorrect?: string | null,
    } | null >,
    solution:  Array< {
      __typename: "solution",
      answer: string,
      optionNumber?: number | null,
      bestSolution: boolean,
    } | null >,
    hint:  Array< {
      __typename: "hint",
      optionNumber?: number | null,
      hint?: string | null,
    } | null >,
    groups?: Array< string | null > | null,
    media: string,
    questionName?: string | null,
    wordLimit?: number | null,
    internalKeywords?: Array< string | null > | null,
    externalKeywords?: Array< string | null > | null,
    videoSolution?: string | null,
    competency?:  Array< {
      __typename: "competency",
      progSub: string,
      progTopic: string,
      progLevel: string,
    } | null > | null,
    subTopic?: string | null,
    concepts?: string | null,
    adminID: string,
    userID: string,
    blanksCount?: number | null,
    caseSensitive?: boolean | null,
    QuesDependency?: string | null,
    fillUpanswer?:  Array< {
      __typename: "answer",
      splitMarksEqually?: string | null,
      weightage?: number | null,
      answer?: string | null,
      alternateAns?: Array< string | null > | null,
    } | null > | null,
    languages?: Array< string | null > | null,
    SingleLanguage?: string | null,
    inputFormat?: string | null,
    outputFormat?: string | null,
    enableCustomInput?: boolean | null,
    enableAPITesting?: boolean | null,
    codeConstraints?: string | null,
    evaluationTime?: boolean | null,
    timeLimit?: string | null,
    memoryLimit?: string | null,
    outputLimit?: string | null,
    codeSize?: string | null,
    sample?:  Array< {
      __typename: "solution",
      answer: string,
      optionNumber?: number | null,
      bestSolution: boolean,
    } | null > | null,
    backgroundImg?: string | null,
    initialQuery?: string | null,
    fileCount?: number | null,
    fileCountMandatory?: boolean | null,
    fileFormats?: Array< string | null > | null,
    enableAutoRecord?: boolean | null,
    minRecording?: number | null,
    maxRecording?: number | null,
    attemptsToRecord?: number | null,
    autoEvaluation?: boolean | null,
    cloudProvider?: string | null,
    startTime?: number | null,
    ZipFile?: string | null,
    themes?: Array< string | null > | null,
    fileSizes?: Array< string | null > | null,
    techStack?: string | null,
    instanceSize?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateContentBankDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionContentBankDetailsFilterInput | null,
};

export type OnCreateContentBankDetailsSubscription = {
  onCreateContentBankDetails?:  {
    __typename: "ContentBankDetails",
    id: string,
    name: string,
    description: string,
    adminID: string,
    visibility: string,
    department: string,
    Groups: Array< string | null >,
    userID: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContentBankDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionContentBankDetailsFilterInput | null,
};

export type OnUpdateContentBankDetailsSubscription = {
  onUpdateContentBankDetails?:  {
    __typename: "ContentBankDetails",
    id: string,
    name: string,
    description: string,
    adminID: string,
    visibility: string,
    department: string,
    Groups: Array< string | null >,
    userID: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContentBankDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionContentBankDetailsFilterInput | null,
};

export type OnDeleteContentBankDetailsSubscription = {
  onDeleteContentBankDetails?:  {
    __typename: "ContentBankDetails",
    id: string,
    name: string,
    description: string,
    adminID: string,
    visibility: string,
    department: string,
    Groups: Array< string | null >,
    userID: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateContentSubscriptionVariables = {
  filter?: ModelSubscriptionContentFilterInput | null,
};

export type OnCreateContentSubscription = {
  onCreateContent?:  {
    __typename: "content",
    id: string,
    contentBankID: string,
    contentType: string,
    contentsubType: string,
    contentName: string,
    subTopic: string,
    topic: string,
    subject: string,
    content: string,
    averageReadTime: string,
    groups: Array< string | null >,
    additionalInformation: string,
    adminID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContentSubscriptionVariables = {
  filter?: ModelSubscriptionContentFilterInput | null,
};

export type OnUpdateContentSubscription = {
  onUpdateContent?:  {
    __typename: "content",
    id: string,
    contentBankID: string,
    contentType: string,
    contentsubType: string,
    contentName: string,
    subTopic: string,
    topic: string,
    subject: string,
    content: string,
    averageReadTime: string,
    groups: Array< string | null >,
    additionalInformation: string,
    adminID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContentSubscriptionVariables = {
  filter?: ModelSubscriptionContentFilterInput | null,
};

export type OnDeleteContentSubscription = {
  onDeleteContent?:  {
    __typename: "content",
    id: string,
    contentBankID: string,
    contentType: string,
    contentsubType: string,
    contentName: string,
    subTopic: string,
    topic: string,
    subject: string,
    content: string,
    averageReadTime: string,
    groups: Array< string | null >,
    additionalInformation: string,
    adminID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMyTable2SubscriptionVariables = {
  filter?: ModelSubscriptionMyTable2FilterInput | null,
};

export type OnCreateMyTable2Subscription = {
  onCreateMyTable2?:  {
    __typename: "myTable2",
    id: string,
    title: string,
    gender: string,
    address: string,
    age: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMyTable2SubscriptionVariables = {
  filter?: ModelSubscriptionMyTable2FilterInput | null,
};

export type OnUpdateMyTable2Subscription = {
  onUpdateMyTable2?:  {
    __typename: "myTable2",
    id: string,
    title: string,
    gender: string,
    address: string,
    age: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMyTable2SubscriptionVariables = {
  filter?: ModelSubscriptionMyTable2FilterInput | null,
};

export type OnDeleteMyTable2Subscription = {
  onDeleteMyTable2?:  {
    __typename: "myTable2",
    id: string,
    title: string,
    gender: string,
    address: string,
    age: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnCreateCourseSubscription = {
  onCreateCourse?:  {
    __typename: "course",
    id: string,
    title: string,
    price: string,
    about: string,
    file: string,
    user_id: string,
    adminID: string,
    courseCode: string,
    validity:  {
      __typename: "Validity",
      fromTime: string,
      toTime: string,
    },
    description: string,
    leaderBoard: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnUpdateCourseSubscription = {
  onUpdateCourse?:  {
    __typename: "course",
    id: string,
    title: string,
    price: string,
    about: string,
    file: string,
    user_id: string,
    adminID: string,
    courseCode: string,
    validity:  {
      __typename: "Validity",
      fromTime: string,
      toTime: string,
    },
    description: string,
    leaderBoard: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnDeleteCourseSubscription = {
  onDeleteCourse?:  {
    __typename: "course",
    id: string,
    title: string,
    price: string,
    about: string,
    file: string,
    user_id: string,
    adminID: string,
    courseCode: string,
    validity:  {
      __typename: "Validity",
      fromTime: string,
      toTime: string,
    },
    description: string,
    leaderBoard: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTopicSubscriptionVariables = {
  filter?: ModelSubscriptionTopicFilterInput | null,
};

export type OnCreateTopicSubscription = {
  onCreateTopic?:  {
    __typename: "topic",
    id: string,
    name: string,
    status: number,
    userID: string,
    adminID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTopicSubscriptionVariables = {
  filter?: ModelSubscriptionTopicFilterInput | null,
};

export type OnUpdateTopicSubscription = {
  onUpdateTopic?:  {
    __typename: "topic",
    id: string,
    name: string,
    status: number,
    userID: string,
    adminID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTopicSubscriptionVariables = {
  filter?: ModelSubscriptionTopicFilterInput | null,
};

export type OnDeleteTopicSubscription = {
  onDeleteTopic?:  {
    __typename: "topic",
    id: string,
    name: string,
    status: number,
    userID: string,
    adminID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSubTopicSubscriptionVariables = {
  filter?: ModelSubscriptionSubTopicFilterInput | null,
};

export type OnCreateSubTopicSubscription = {
  onCreateSubTopic?:  {
    __typename: "subTopic",
    id: string,
    topicID: string,
    name: string,
    subject: string,
    status: number,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSubTopicSubscriptionVariables = {
  filter?: ModelSubscriptionSubTopicFilterInput | null,
};

export type OnUpdateSubTopicSubscription = {
  onUpdateSubTopic?:  {
    __typename: "subTopic",
    id: string,
    topicID: string,
    name: string,
    subject: string,
    status: number,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSubTopicSubscriptionVariables = {
  filter?: ModelSubscriptionSubTopicFilterInput | null,
};

export type OnDeleteSubTopicSubscription = {
  onDeleteSubTopic?:  {
    __typename: "subTopic",
    id: string,
    topicID: string,
    name: string,
    subject: string,
    status: number,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
};

export type OnCreateGroupSubscription = {
  onCreateGroup?:  {
    __typename: "group",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
};

export type OnUpdateGroupSubscription = {
  onUpdateGroup?:  {
    __typename: "group",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
};

export type OnDeleteGroupSubscription = {
  onDeleteGroup?:  {
    __typename: "group",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateThemesSubscriptionVariables = {
  filter?: ModelSubscriptionThemesFilterInput | null,
};

export type OnCreateThemesSubscription = {
  onCreateThemes?:  {
    __typename: "themes",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateThemesSubscriptionVariables = {
  filter?: ModelSubscriptionThemesFilterInput | null,
};

export type OnUpdateThemesSubscription = {
  onUpdateThemes?:  {
    __typename: "themes",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteThemesSubscriptionVariables = {
  filter?: ModelSubscriptionThemesFilterInput | null,
};

export type OnDeleteThemesSubscription = {
  onDeleteThemes?:  {
    __typename: "themes",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateInternalKeywordsSubscriptionVariables = {
  filter?: ModelSubscriptionInternalKeywordsFilterInput | null,
};

export type OnCreateInternalKeywordsSubscription = {
  onCreateInternalKeywords?:  {
    __typename: "InternalKeywords",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInternalKeywordsSubscriptionVariables = {
  filter?: ModelSubscriptionInternalKeywordsFilterInput | null,
};

export type OnUpdateInternalKeywordsSubscription = {
  onUpdateInternalKeywords?:  {
    __typename: "InternalKeywords",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInternalKeywordsSubscriptionVariables = {
  filter?: ModelSubscriptionInternalKeywordsFilterInput | null,
};

export type OnDeleteInternalKeywordsSubscription = {
  onDeleteInternalKeywords?:  {
    __typename: "InternalKeywords",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateExternalKeywordsSubscriptionVariables = {
  filter?: ModelSubscriptionExternalKeywordsFilterInput | null,
};

export type OnCreateExternalKeywordsSubscription = {
  onCreateExternalKeywords?:  {
    __typename: "ExternalKeywords",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateExternalKeywordsSubscriptionVariables = {
  filter?: ModelSubscriptionExternalKeywordsFilterInput | null,
};

export type OnUpdateExternalKeywordsSubscription = {
  onUpdateExternalKeywords?:  {
    __typename: "ExternalKeywords",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteExternalKeywordsSubscriptionVariables = {
  filter?: ModelSubscriptionExternalKeywordsFilterInput | null,
};

export type OnDeleteExternalKeywordsSubscription = {
  onDeleteExternalKeywords?:  {
    __typename: "ExternalKeywords",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLanguageSubscriptionVariables = {
  filter?: ModelSubscriptionLanguageFilterInput | null,
};

export type OnCreateLanguageSubscription = {
  onCreateLanguage?:  {
    __typename: "Language",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLanguageSubscriptionVariables = {
  filter?: ModelSubscriptionLanguageFilterInput | null,
};

export type OnUpdateLanguageSubscription = {
  onUpdateLanguage?:  {
    __typename: "Language",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLanguageSubscriptionVariables = {
  filter?: ModelSubscriptionLanguageFilterInput | null,
};

export type OnDeleteLanguageSubscription = {
  onDeleteLanguage?:  {
    __typename: "Language",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBatchSubscriptionVariables = {
  filter?: ModelSubscriptionBatchFilterInput | null,
};

export type OnCreateBatchSubscription = {
  onCreateBatch?:  {
    __typename: "batch",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBatchSubscriptionVariables = {
  filter?: ModelSubscriptionBatchFilterInput | null,
};

export type OnUpdateBatchSubscription = {
  onUpdateBatch?:  {
    __typename: "batch",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBatchSubscriptionVariables = {
  filter?: ModelSubscriptionBatchFilterInput | null,
};

export type OnDeleteBatchSubscription = {
  onDeleteBatch?:  {
    __typename: "batch",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSpecializationSubscriptionVariables = {
  filter?: ModelSubscriptionSpecializationFilterInput | null,
};

export type OnCreateSpecializationSubscription = {
  onCreateSpecialization?:  {
    __typename: "specialization",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSpecializationSubscriptionVariables = {
  filter?: ModelSubscriptionSpecializationFilterInput | null,
};

export type OnUpdateSpecializationSubscription = {
  onUpdateSpecialization?:  {
    __typename: "specialization",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSpecializationSubscriptionVariables = {
  filter?: ModelSubscriptionSpecializationFilterInput | null,
};

export type OnDeleteSpecializationSubscription = {
  onDeleteSpecialization?:  {
    __typename: "specialization",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDepartmentSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentFilterInput | null,
};

export type OnCreateDepartmentSubscription = {
  onCreateDepartment?:  {
    __typename: "department",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDepartmentSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentFilterInput | null,
};

export type OnUpdateDepartmentSubscription = {
  onUpdateDepartment?:  {
    __typename: "department",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDepartmentSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentFilterInput | null,
};

export type OnDeleteDepartmentSubscription = {
  onDeleteDepartment?:  {
    __typename: "department",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTechStackSubscriptionVariables = {
  filter?: ModelSubscriptionTechStackFilterInput | null,
};

export type OnCreateTechStackSubscription = {
  onCreateTechStack?:  {
    __typename: "techStack",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTechStackSubscriptionVariables = {
  filter?: ModelSubscriptionTechStackFilterInput | null,
};

export type OnUpdateTechStackSubscription = {
  onUpdateTechStack?:  {
    __typename: "techStack",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTechStackSubscriptionVariables = {
  filter?: ModelSubscriptionTechStackFilterInput | null,
};

export type OnDeleteTechStackSubscription = {
  onDeleteTechStack?:  {
    __typename: "techStack",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateInstanceSizeSubscriptionVariables = {
  filter?: ModelSubscriptionInstanceSizeFilterInput | null,
};

export type OnCreateInstanceSizeSubscription = {
  onCreateInstanceSize?:  {
    __typename: "instanceSize",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInstanceSizeSubscriptionVariables = {
  filter?: ModelSubscriptionInstanceSizeFilterInput | null,
};

export type OnUpdateInstanceSizeSubscription = {
  onUpdateInstanceSize?:  {
    __typename: "instanceSize",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInstanceSizeSubscriptionVariables = {
  filter?: ModelSubscriptionInstanceSizeFilterInput | null,
};

export type OnDeleteInstanceSizeSubscription = {
  onDeleteInstanceSize?:  {
    __typename: "instanceSize",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProgrammerSubjectSubscriptionVariables = {
  filter?: ModelSubscriptionProgrammerSubjectFilterInput | null,
};

export type OnCreateProgrammerSubjectSubscription = {
  onCreateProgrammerSubject?:  {
    __typename: "programmerSubject",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProgrammerSubjectSubscriptionVariables = {
  filter?: ModelSubscriptionProgrammerSubjectFilterInput | null,
};

export type OnUpdateProgrammerSubjectSubscription = {
  onUpdateProgrammerSubject?:  {
    __typename: "programmerSubject",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProgrammerSubjectSubscriptionVariables = {
  filter?: ModelSubscriptionProgrammerSubjectFilterInput | null,
};

export type OnDeleteProgrammerSubjectSubscription = {
  onDeleteProgrammerSubject?:  {
    __typename: "programmerSubject",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProgrammerTopicSubscriptionVariables = {
  filter?: ModelSubscriptionProgrammerTopicFilterInput | null,
};

export type OnCreateProgrammerTopicSubscription = {
  onCreateProgrammerTopic?:  {
    __typename: "programmerTopic",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProgrammerTopicSubscriptionVariables = {
  filter?: ModelSubscriptionProgrammerTopicFilterInput | null,
};

export type OnUpdateProgrammerTopicSubscription = {
  onUpdateProgrammerTopic?:  {
    __typename: "programmerTopic",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProgrammerTopicSubscriptionVariables = {
  filter?: ModelSubscriptionProgrammerTopicFilterInput | null,
};

export type OnDeleteProgrammerTopicSubscription = {
  onDeleteProgrammerTopic?:  {
    __typename: "programmerTopic",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProgrammerLevelSubscriptionVariables = {
  filter?: ModelSubscriptionProgrammerLevelFilterInput | null,
};

export type OnCreateProgrammerLevelSubscription = {
  onCreateProgrammerLevel?:  {
    __typename: "programmerLevel",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProgrammerLevelSubscriptionVariables = {
  filter?: ModelSubscriptionProgrammerLevelFilterInput | null,
};

export type OnUpdateProgrammerLevelSubscription = {
  onUpdateProgrammerLevel?:  {
    __typename: "programmerLevel",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProgrammerLevelSubscriptionVariables = {
  filter?: ModelSubscriptionProgrammerLevelFilterInput | null,
};

export type OnDeleteProgrammerLevelSubscription = {
  onDeleteProgrammerLevel?:  {
    __typename: "programmerLevel",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnCreateBlogSubscription = {
  onCreateBlog?:  {
    __typename: "blog",
    id: string,
    catergory?: Array< string | null > | null,
    title: string,
    description: string,
    status: number,
    userID: string,
    adminID: string,
    hodID: string,
    tutorID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnUpdateBlogSubscription = {
  onUpdateBlog?:  {
    __typename: "blog",
    id: string,
    catergory?: Array< string | null > | null,
    title: string,
    description: string,
    status: number,
    userID: string,
    adminID: string,
    hodID: string,
    tutorID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnDeleteBlogSubscription = {
  onDeleteBlog?:  {
    __typename: "blog",
    id: string,
    catergory?: Array< string | null > | null,
    title: string,
    description: string,
    status: number,
    userID: string,
    adminID: string,
    hodID: string,
    tutorID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "user",
    id: string,
    email: string,
    password: string,
    MobNumber: string,
    username: string,
    role: string,
    status: number,
    permissions?:  {
      __typename: "Permissions",
      Jobs:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Courses:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Exams:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Results:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      QuestionBank:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Questions:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      ContentBank:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Content:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Groups:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Tests:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Drives:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Student:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Reports:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      StudentApprove:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      StudentReject:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Tutor:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Attendance:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      LeaderBoard:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
    } | null,
    adminID: string,
    type?: string | null,
    uploadType?: string | null,
    Groups?: Array< string | null > | null,
    userID?: string | null,
    organisation?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    Batch?: string | null,
    department?: Array< string | null > | null,
    specialization?: string | null,
    course?: Array< string | null > | null,
    resume?: string | null,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "user",
    id: string,
    email: string,
    password: string,
    MobNumber: string,
    username: string,
    role: string,
    status: number,
    permissions?:  {
      __typename: "Permissions",
      Jobs:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Courses:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Exams:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Results:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      QuestionBank:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Questions:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      ContentBank:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Content:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Groups:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Tests:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Drives:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Student:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Reports:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      StudentApprove:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      StudentReject:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Tutor:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Attendance:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      LeaderBoard:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
    } | null,
    adminID: string,
    type?: string | null,
    uploadType?: string | null,
    Groups?: Array< string | null > | null,
    userID?: string | null,
    organisation?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    Batch?: string | null,
    department?: Array< string | null > | null,
    specialization?: string | null,
    course?: Array< string | null > | null,
    resume?: string | null,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "user",
    id: string,
    email: string,
    password: string,
    MobNumber: string,
    username: string,
    role: string,
    status: number,
    permissions?:  {
      __typename: "Permissions",
      Jobs:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Courses:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Exams:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Results:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      QuestionBank:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Questions:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      ContentBank:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Content:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Groups:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Tests:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Drives:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Student:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Reports:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      StudentApprove:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      StudentReject:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Tutor:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      Attendance:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
      LeaderBoard:  {
        __typename: "PermissionDetails",
        showInMenu: string,
        create: string,
        edit: string,
        view: string,
        publisher: string,
        proctorAdmin: string,
        evaluator: string,
        download: string,
        allow: string,
        notallow: string,
      },
    } | null,
    adminID: string,
    type?: string | null,
    uploadType?: string | null,
    Groups?: Array< string | null > | null,
    userID?: string | null,
    organisation?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    Batch?: string | null,
    department?: Array< string | null > | null,
    specialization?: string | null,
    course?: Array< string | null > | null,
    resume?: string | null,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
