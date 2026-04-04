export const filterLectures = (lectures, filters) => {
  return lectures.filter((lecture) => {
    const search = filters.search.toLowerCase();

    const matchesSearch =
      lecture.title.toLowerCase().includes(search) ||
      lecture.speaker.toLowerCase().includes(search) ||
      lecture.category.toLowerCase().includes(search) ||
      lecture.subCategory.toLowerCase().includes(search) ||
      lecture.year.includes(search);

    const matchesSpeaker = filters.speaker
      ? lecture.speaker === filters.speaker
      : true;

    const matchesCategory = filters.category
      ? lecture.category === filters.category
      : true;

    const matchesSubCategory = filters.subCategory
      ? lecture.subCategory === filters.subCategory
      : true;

    const matchesYear = filters.year ? lecture.year === filters.year : true;

    return (
      matchesSearch &&
      matchesSpeaker &&
      matchesCategory &&
      matchesSubCategory &&
      matchesYear
    );
  });
};
