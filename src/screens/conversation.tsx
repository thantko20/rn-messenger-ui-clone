import { Keyboard, TextInput, TouchableWithoutFeedback } from 'react-native';
import { AnimatedBox, Box, IconButton, Pressable } from '../atoms';
import { RootStackScreenProps } from '../types/navigations';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import { FadeIn, FadeOut, Layout } from 'react-native-reanimated';

const Conversation = ({
  route,
  navigation,
}: RootStackScreenProps<'Conversation'>) => {
  const { username, avatar } = route.params;

  useEffect(() => {
    navigation.setOptions({ headerTitle: username });
  }, []);

  const { colors } = useTheme<Theme>();

  const [message, setMessage] = useState('');

  const [optionsVisible, setOptionsVisible] = useState(true);

  const onChangeMessage = (value: string) => {
    setMessage(value);

    setOptionsVisible(!!!value);
  };

  const revealOptions = () => {
    setOptionsVisible(true);
  };

  const hideOptions = () => {
    setOptionsVisible(false);
  };

  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    const unfocusInput = () => {
      if (inputRef.current?.isFocused) {
        inputRef.current?.blur();
      }
    };

    Keyboard.addListener('keyboardDidHide', unfocusInput);

    return () => {
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  return (
    <Box flex={1} backgroundColor="white">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Box flex={1}></Box>
      </TouchableWithoutFeedback>
      <Box
        padding={'sm'}
        paddingBottom="lg"
        marginTop={'auto'}
        flexDirection="row"
        alignItems="center"
        gap={'sm'}
        shadowColor="gray"
        shadowOffset={{
          width: 0,
          height: -1,
        }}
        shadowOpacity={0.05}
        shadowRadius={1}
        elevation={1}
      >
        {optionsVisible ? (
          <AnimatedBox
            flexDirection="row"
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(100)}
          >
            <IconButton onPress={() => {}}>
              <Ionicons name="ios-grid" size={24} color={colors.$primary} />
            </IconButton>

            <IconButton onPress={() => {}}>
              <Ionicons name="camera" size={24} color={colors.$primary} />
            </IconButton>

            <IconButton onPress={() => {}}>
              <MaterialIcons name="photo" size={24} color={colors.$primary} />
            </IconButton>

            <IconButton onPress={() => {}}>
              <Ionicons name="mic" size={24} color={colors.$primary} />
            </IconButton>
          </AnimatedBox>
        ) : (
          <AnimatedBox entering={FadeIn.duration(100)}>
            <IconButton onPress={revealOptions}>
              <Ionicons
                name="ios-arrow-forward"
                size={24}
                color={colors.$primary}
              />
            </IconButton>
          </AnimatedBox>
        )}
        <AnimatedBox
          layout={Layout}
          flex={1}
          backgroundColor="$lightestGray"
          paddingVertical="xs"
          paddingHorizontal="sm"
          borderRadius="full"
        >
          <Pressable onPress={hideOptions}>
            <TextInput
              ref={inputRef}
              value={message}
              placeholder={optionsVisible ? 'Message' : 'Type a message...'}
              onFocus={hideOptions}
              onBlur={revealOptions}
              onPressIn={hideOptions}
              onChangeText={onChangeMessage}
            />
          </Pressable>
        </AnimatedBox>
        {message ? (
          <IconButton onPress={() => {}}>
            <Ionicons name="send" size={24} color={colors.$primary} />
          </IconButton>
        ) : (
          <IconButton onPress={() => {}}>
            <Ionicons name="heart" size={24} color={colors.$primary} />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default Conversation;
