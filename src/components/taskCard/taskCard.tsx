import React from 'react';
import { Text, View } from 'react-native';
import { Task } from '../../store/taskStore';
import { PrimeryButton } from '../primaryButton/primaryButton';
import styles from './taskCard.style';

type Props = {
    item: Task,
    handleEditTask: (item: Task) => void,
    handleDeleteTask: (id: string) => void
};

export const TaskCard: React.FC<Props> = ({
    item,
    handleEditTask,
    handleDeleteTask
}) => {

    return (
        <View style={styles.taskItem}>
            <View style={styles.flex}>
                <Text numberOfLines={1}>{item.title}</Text>
            </View>
            <PrimeryButton
                style={styles.flex}
                title="Edit"
                onPress={() => handleEditTask(item)} />
            <PrimeryButton
                style={styles.flex}
                title="Delete"
                onPress={() => handleDeleteTask(item.id)} />
        </View>
    )
};
