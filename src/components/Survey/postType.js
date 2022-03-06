export const postType = (
  id,
  question,
  question_type,
  answer,
  answer_numeric
) => {
  return {
    hotel_id: 3,
    survey_header_id: 24,
    survey_line_id: id,
    question_group: "",
    question: question,
    question_type: question_type,
    description: "",
    priority: 1,
    profile_id: 17201,
    answer: answer,
    answer_numeric: answer_numeric,
  };
};
