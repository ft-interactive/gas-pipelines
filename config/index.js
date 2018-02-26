import article from './article';
import getFlags from './flags';
import getOnwardJourney from './onward-journey';

import getMainContent from './get-main-content';

export default async (environment = 'development') => {
  const d = await article(environment);
  const flags = await getFlags(environment);
  const onwardJourney = await getOnwardJourney(environment);

  const { contentObject, dataObject } = await getMainContent(d.googleDocId);

  return {
    ...d,
    flags,
    onwardJourney,
    contentObject,
    dataObject,
  };
};
