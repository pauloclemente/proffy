export default function convertHourToMin(time: string){
  const [hour, min] = time.split(':').map(Number);
  const timeInMin = (hour * 60) + min;
  return timeInMin;
}
