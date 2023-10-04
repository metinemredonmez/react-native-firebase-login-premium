import { StyleSheet, Text, View, Alert } from 'react-native';
import React, { useState } from 'react';
import AuthContent from '../components/AuthContent';
import Loading from '../components/Loading';
import { login } from '../util/auth';

export default function LoginScreen() {
  const [isAuthanticating, setIsAuthanticating] = useState(false);

  async function loginHandler({ email, password }) {
    setIsAuthanticating(true);
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert('Giriş yapılamadı!', 'Lütfen bilgileriniz kontrol ediniz');
    }

    setIsAuthanticating(false);
  }
  if (isAuthanticating) {
    return <Loading message="Kullanıcı giriş yapıyor..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

const styles = StyleSheet.create({});
