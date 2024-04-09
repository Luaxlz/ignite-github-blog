import { formatDistance, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

// Função que recebe uma data no formato ISO e retorna a distância até a data atual
const formatDistanceToNow = (dateISO: string) => {
  const parsedDate = parseISO(dateISO);
  return formatDistance(parsedDate, new Date(), {
    addSuffix: true,
    locale: ptBR,
  });
};

export default formatDistanceToNow;
