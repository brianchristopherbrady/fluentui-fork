import { makeStyles, mergeClasses } from '@griffel/react';
import type { SlotClassNames } from '@fluentui/react-utilities';
import { useDialogTitleStyles_unstable } from '@fluentui/react-dialog';
import { tokens } from '@fluentui/react-theme';

import type { DrawerHeaderTitleSlots, DrawerHeaderTitleState } from './DrawerHeaderTitle.types';

export const drawerHeaderTitleClassNames: SlotClassNames<DrawerHeaderTitleSlots> = {
  root: 'fui-DrawerHeaderTitle',
  heading: 'fui-DrawerHeaderTitle__heading',
  action: 'fui-DrawerHeaderTitle__action',
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: tokens.spacingHorizontalS,
  },

  action: {
    marginRight: `calc(${tokens.spacingHorizontalS} * -1)`,
  },
});

/**
 * Apply styling to the DrawerHeaderTitle slots based on the state
 */
export const useDrawerHeaderTitleStyles_unstable = (state: DrawerHeaderTitleState): DrawerHeaderTitleState => {
  'use no memo';

  const styles = useStyles();

  const {
    heading: root = {},
    action,
    // We should not use components to pass along the base element type of a slot
    // but there's no way to retrieve the element type of a slot from the slot definition
    // right now without using SLOT_ELEMENT_TYPE_SYMBOL
    // TODO: create a method to retrieve the element type of a slot
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    components,
  } = state;

  useDialogTitleStyles_unstable({
    components: {
      root: components.heading,
      action: components.action,
    },
    root,
    action,
  });

  state.root.className = mergeClasses(drawerHeaderTitleClassNames.root, styles.root, state.root.className);

  if (state.heading) {
    state.heading.className = mergeClasses(drawerHeaderTitleClassNames.heading, state.heading.className);
  }

  if (state.action) {
    state.action.className = mergeClasses(drawerHeaderTitleClassNames.action, styles.action, state.action.className);
  }

  return state;
};
