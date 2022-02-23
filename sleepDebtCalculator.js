const getSleepHours = day => {
    switch(day){
      case "monday": return 8; break;
      case "tuesday": return 9; break;
      case "wednesday": return 8; break;
      case "thursday": return 8; break;
      case "friday": return 8; break;
      case "saturday": return 8; break;
      case "sunday": return 8; break;
    }
  };
  console.log(getSleepHours('tuesday')); // should print the # hours assigned to tuesday
  const getActualSleepHours = () => {
    getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') ;
  };
  const getIdealSleepHours = () => {
    const idealHours = 7.5;
    return idealHours * 7;
  };
  console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week
   
  console.log(getIdealSleepHours()); // if idealHours is 8, should print 56
  
  const calculateSleepDebt = () => {
      const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours(7.5);
      
      if (actualSleepHours === idealSleepHours) {
    console.log('perfect amount');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  } else {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) more sleep than you needed this week. You should make more from the day.');
  }
  };
  
  
  calculateSleepDebt();