export const DEFAULT_PAGE_DESCRIPTION = `Use this template to track your personal tasks.`

export const DEFAULT_PAGE_PARAMS = {
  template: 'Notion',
  fullWidth: false,
  smallText: false,
  favorite: false,
  expanded: false,
  locked: false,
  iconUrl: null,
  coverUrl: null,
  coverPosition: 50,
  descriptionExpanded: true,
  description: DEFAULT_PAGE_DESCRIPTION,
  font: 'Default',
  dependencies: [],
  content: [],
  sbOrder: null,
  taskOrder: null,
  deleted: false,
}

export const MAILER_TRANSPORTER_PARAMS = {
  host: process.env.SMTP_HOST,
  port: +process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_MAIL_PASS,
  },
}
