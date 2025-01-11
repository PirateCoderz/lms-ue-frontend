export const formatTimetable = (data) => {
  const schedule = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
  };

  const currentYear = new Date().getFullYear(); // get the current year

  data.forEach((classData, i) => {
    const extractClassDetails = (classString) => {
      if (!classString) return null;
      
      const classDetails = classString.split(/\s+/);
      if (classDetails.length < 5) return null; // Ensure that there are enough elements

      const [name, type, location, startTime, endTime] = [classDetails[0], classDetails[1], classDetails[2], classDetails[3], classDetails[4]];
      return { name, type, location, startTime, endTime };
    };

    // Extract classes for each day
    const mondayClass = extractClassDetails(classData.Monday);
    const tuesdayClass = extractClassDetails(classData.Tuesday);
    const wednesdayClass = extractClassDetails(classData.Wednesday);
    const thursdayClass = extractClassDetails(classData.Thursday);
    const fridayClass = extractClassDetails(classData.Friday);

    // Helper to create event object
    const createEvent = (dayClass, dayOffset) => {
      const startTime = dayClass.startTime.length === 4 ? `0${dayClass.startTime}` : dayClass.startTime;
      const endTime = dayClass.endTime.length === 4 ? `0${dayClass.endTime}` : dayClass.endTime;

      return {
        id: i + 1,
        name: dayClass.name,
        type: 'class',
        startTime: new Date(`${currentYear}-02-${19 + dayOffset}T${startTime}:00`),
        endTime: new Date(`${currentYear}-02-${19 + dayOffset}T${endTime}:00`),
      };
    };

    // Add the events to the corresponding day
    if (mondayClass) schedule.monday.push(createEvent(mondayClass, 0));
    if (tuesdayClass) schedule.tuesday.push(createEvent(tuesdayClass, 1));
    if (wednesdayClass) schedule.wednesday.push(createEvent(wednesdayClass, 2));
    if (thursdayClass) schedule.thursday.push(createEvent(thursdayClass, 3));
    if (fridayClass) schedule.friday.push(createEvent(fridayClass, 4));
  });

  return schedule;
};
