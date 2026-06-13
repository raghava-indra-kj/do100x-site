export const site = {
  developer: {
    name: import.meta.env.VITE_DEVELOPER_NAME,
    email: import.meta.env.VITE_DEVELOPER_EMAIL,
    linkedin: import.meta.env.VITE_DEVELOPER_LINKEDIN,
  },
  reader: {
    url: import.meta.env.VITE_READER_URL,
  },
} as const
