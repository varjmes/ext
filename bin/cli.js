#!/usr/bin/env node

const ext = require('../index')

const args = process.argv.slice(2)
const result = ext(args)

if (result.length > 1) {
  process.stdout.write(result.join(' ').trim())
} else {
  process.stdout.write(result[0])
}
