import NavLinks from '@/Components/NavLinks';
import { ctx } from '@/lib/ctx';

type Props = {};

const Sidebar = (props: Props) => {
  const listNames = Object.keys(ctx.lists);

  return (
    <>
      <div>
      <NavLinks listNames={listNames} />
      </div>
    </>
  );
};

export default Sidebar;
