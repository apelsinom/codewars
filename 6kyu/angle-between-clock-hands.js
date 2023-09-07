// ❓ DESCRIPTION:
// Given a Date (in JS and Ruby) or hours and minutes (in C and Python), 
// return the angle between the two hands of a 12-hour analog clock in radians.

// ✅ SOLUTION:
function handAngle(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const hourAngle = (hours % 12 + minutes / 60) * (Math.PI / 6);
  const minuteAngle = minutes * (Math.PI / 30);
  const angle = Math.abs(hourAngle - minuteAngle);
  return angle > Math.PI ? 2 * Math.PI - angle : angle;
}