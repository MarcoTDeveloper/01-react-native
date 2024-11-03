import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#252525",
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: "white",
    paddingLeft: 16
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 48,
    height: 48,
    borderTopEndRadius: 6,
    borderBottomRightRadius: 6,
    backgroundColor: "red"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  },
})