import { copyFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const source = fileURLToPath(new URL('../source-pages/index.html', import.meta.url))
const target = fileURLToPath(new URL('../index.html', import.meta.url))

copyFileSync(source, target)
