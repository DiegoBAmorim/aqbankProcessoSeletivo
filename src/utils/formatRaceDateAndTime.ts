import {parseISO, format} from 'date-fns';

import {ptBR} from 'date-fns/locale';

export function formatRaceDateAndTime(
  date: string | undefined,
  time: string | undefined,
) {
  if (date && time) {
    const dateTimeString = `${date}T${time}`;

    const dateTime = parseISO(dateTimeString);

    const formattedDateAndTime = format(dateTime, "EEE, d 'de' LLL, HH:mm", {
      locale: ptBR,
    });
    if (formattedDateAndTime) {
      return formattedDateAndTime;
    }
  }
}
