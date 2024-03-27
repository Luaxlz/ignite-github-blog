import { ArrowSquareOut } from '@phosphor-icons/react';
import { CustomLink } from './styles';

export default function Link() {
  return (
    <CustomLink>
      Label
      <ArrowSquareOut size={12} weight='bold' />
    </CustomLink>
  );
}
