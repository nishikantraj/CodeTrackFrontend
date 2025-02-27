
interface LanguageUsage{
  language: string,
  minutes: string
}

interface DummyProps{
  name: string,
  languages: LanguageUsage[]
}

const data: DummyProps[] = [
    {
        "name": "Nishikant",
        "languages": [
          { "language": "typescriptreact", "minutes": "52.96" },
          { "language": "typescript", "minutes": "0.29" }
        ]
    },
    {
        "name": "Adarsh",
        "languages": [
          { "language": "typescript", "minutes": "109.69" },
          { "language": "json", "minutes": "13.14" },
          { "language": "javascript", "minutes": "43.26" },
          { "language": "svelte", "minutes": "89.96" },
          { "language": "Log", "minutes": "2.84" },
          { "language": "jsonc", "minutes": "5.76" },
          { "language": "rust", "minutes": "1.48" },
          { "language": "markdown", "minutes": "5.82" },
          { "language": "shellscript", "minutes": "0.59" },
          { "language": "plaintext", "minutes": "0.25" },
          { "language": "gitignore", "minutes": "0.02" }
        ]
    },
    {
        "name": "Truptiman Dani",
        "languages": [
          { "language": "html", "minutes": "83.95" },
          { "language": "css", "minutes": "4.36" }
        ]
    },
    ...Array.from({ length: 50 }, (_, i) => ({
        "name": `User${i + 1}`,
        "languages": [
          { "language": "language1", "minutes": (Math.random() * 100).toFixed(2) },
          { "language": "language2", "minutes": (Math.random() * 100).toFixed(2) }
        ]
    }))
];

export default data;