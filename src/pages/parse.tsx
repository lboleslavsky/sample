import { trpc } from '../utils/trpc';
import type { NextPageWithLayout } from './_app';

const ParsePage: NextPageWithLayout = () => {
  const parse = trpc.parseRemoteAPI.useQuery()
 
  return (
    <>
      
    </>
  );
};

export default ParsePage;