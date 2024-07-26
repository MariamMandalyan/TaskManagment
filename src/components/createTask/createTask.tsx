import React from 'react';
import { View } from 'react-native';
import { PrimeryButton } from '../primaryButton/primaryButton';
import styles from './createTask.style';
import InputField from '../inputField/inputField';

type Props = {
   title: string,
   description: string,
   setTitle: React.Dispatch<React.SetStateAction<string>>,
   setDescription: React.Dispatch<React.SetStateAction<string>>,
   handleSaveTask: () => void,
   handleCancel: () => void
};

export const CreateTask: React.FC<Props> = ({
    title,
    description,
    setTitle,
    setDescription,
    handleSaveTask,
    handleCancel
}) => {

    return (
        <View style={styles.modalContainer}>
            <InputField
                value={title}
                placeholder={"Title"}
                onChangeText={setTitle} />
            <InputField
                value={description}
                placeholder={"Description"}
                onChangeText={setDescription} />
            <PrimeryButton
                disable={!title.length || !description.length}
                title="Save"
                onPress={handleSaveTask} />
            <PrimeryButton
                title="Cancel"
                onPress={handleCancel} />
        </View>
    )
};
