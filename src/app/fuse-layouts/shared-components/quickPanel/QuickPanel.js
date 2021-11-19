import React, { memo } from 'react';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import { useDispatch, useSelector } from 'react-redux';
import { toggleQuickPanel } from './store/stateSlice';
import reducer from './store';

const useStyles = makeStyles(() => ({
  root: {
    width: 280,
  },
}));

function QuickPanel() {
  const dispatch = useDispatch();
  const state = useSelector(({ quickPanel }) => quickPanel.state);

  const classes = useStyles();

  return (
    <SwipeableDrawer
      classes={{ paper: classes.root }}
      open={state}
      anchor="right"
      onOpen={() => {}}
      onClose={() => dispatch(toggleQuickPanel())}
      disableSwipeToOpen
    >
      <FuseScrollbars>
        <Typography>Quick Panel</Typography>
      </FuseScrollbars>
    </SwipeableDrawer>
  );
}

export default withReducer('quickPanel', reducer)(memo(QuickPanel));
