// @ts-ignore
import userManagementClient from '../UserManagementClient';
import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ReactNativeCapsuleWallet,
  USER_ID_TAG,
} from '../react-native/ReactNativeCapsuleWallet';

const recoverRecoveryShare = async () => {
  const { userId } = await userManagementClient.createUser({
    email: `test-${uuidv4()}@test.usecapsule.com`,
  });
  await userManagementClient.verifyEmail(userId, {
    verificationCode: '123456',
  });
  await AsyncStorage.setItem(USER_ID_TAG, userId);

  const wallet = new ReactNativeCapsuleWallet();
  await wallet.initSessionManagement();
  await wallet.init();

  let recoveryShare = '';
  const address = await wallet.createAccount((share) => {
    recoveryShare = share;
  });

  const newRecoveryShare = await wallet.getRecoveryShare(address);

  await AsyncStorage.removeItem(USER_ID_TAG);

  if (recoveryShare === newRecoveryShare) {
    console.log('recoverRecoveryShare PASSED');
  } else {
    console.log('recoverRecoveryShare FAILED');
  }
};

void recoverRecoveryShare();
