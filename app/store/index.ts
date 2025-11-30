import { create } from "zustand"

interface MacbookStore {
  color: string
  setColor: (color: string) => void

  scale: number
  setScale: (scale: number) => void
}

const useMacbookStore = create<MacbookStore>((set) => ({
  color: '#2e2c2e',
  setColor: (color) => set({ color }),

  scale: 0.08,
  setScale: (scale) => set({ scale })
}))

export default useMacbookStore