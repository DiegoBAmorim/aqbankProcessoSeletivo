import {parseISO, format} from 'date-fns';
import {ptBR} from 'date-fns/locale';

export const formatDate = (dateString: string) => {
  const date = parseISO(dateString);

  const formattedDate = format(date, "d 'de' MMMM 'de' yyyy", {locale: ptBR});

  if (formattedDate) {
    return formattedDate;
  }
};
