import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleAddParticipant() {
    if (participants.includes(participantName)) {
      return Alert.alert("Participante já adicionado!", "Na lista já existe um participante com este nome!")
    }

    setParticipants((prev) => [...prev, participantName])
    setParticipantName('')
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert("Remover participante?", `Deseja mesmo remover o participante ${name}`, [
      {
        text: "Confirmar",
        onPress: () => {
          setParticipants((prev) => prev.filter((participant) => participant !== name))
          Alert.alert("Participante deletado!")
        }
      },
      {
        text: "Cancelar",
        style: "cancel"
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sábado, 2 de novembro de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="gray"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleAddParticipant}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(participant) => participant}
        renderItem={({ item }) => {
          return (
            <Participant
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
          )
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <Text style={styles.listEmptyText}>
              Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
            </Text>
          )
        }}
      />

    </View>
  )
}

