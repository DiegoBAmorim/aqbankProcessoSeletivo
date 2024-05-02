// Import necessary functions
import {parseISO, isAfter, isEqual, compareAsc} from 'date-fns';
import {Driver} from '../@types/drivers';

export function filterDrivers(drivers: Driver[] | undefined) {
  if (drivers && drivers?.length > 0) {
    const cutoffDate = parseISO('1960-01-01');

    const filteredDrivers = drivers?.filter(driver => {
      const birthDate = parseISO(driver.dateOfBirth);

      return isEqual(birthDate, cutoffDate) || isAfter(birthDate, cutoffDate);
    });

    filteredDrivers?.sort((driver1, driver2) => {
      const birthDate1 = parseISO(driver1.dateOfBirth);
      const birthDate2 = parseISO(driver2.dateOfBirth);

      return compareAsc(birthDate1, birthDate2);
    });

    return filteredDrivers;
  }
}
