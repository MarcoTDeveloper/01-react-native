import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 24
  },
  eventName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: 'gray',
    fontSize: 16
  },
  form: {
    marginVertical: 24,
    width: "100%",
    flexDirection: "row",
    gap: 12
  },
  input: {
    flex: 1,
    height: 48,
    borderRadius: 6,
    borderWidth: 1,
    color: "white",
    paddingHorizontal: 10,
    borderColor: "#6b7280"
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 48,
    height: 48,
    borderRadius: 6,
    backgroundColor: "green"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  },
  listEmptyText: {
    marginHorizontal: 16,
    color: "white",
    fontSize: 14,
    textAlign: 'center'
  }
})