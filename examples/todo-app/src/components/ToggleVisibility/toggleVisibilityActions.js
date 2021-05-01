export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_UNCOMPLETED = 'SHOW_UNCOMPLETED';

export const onShowAll = () => ({ type: SHOW_ALL });
export const onShowCompleted = () => ({ type: SHOW_COMPLETED });
export const onShowUncompleted = () => ({ type: SHOW_UNCOMPLETED });
