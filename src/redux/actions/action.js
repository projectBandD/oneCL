export function ADD_USER(newUser) {
    return { type: "CURRENT_USER", payload: newUser }

}

export function LOF(newLostOrfound) {
    return { type: "CURRENT_LOF", payload: newLostOrfound }
}

