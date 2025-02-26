import tsLogo from "../assets/language/typescript.png";
import tsxLogo from "../assets/language/tsx.png";
import jsLogo from "../assets/language/javascript.png";
import jsxLogo from "../assets/language/jsx.png";
import cssLogo from "../assets/language/css.png";
import htmlLogo from "../assets/language/html.png";
import svelteLogo from "../assets/language/svelte.png";
import jsoncLogo from "../assets/language/jsonc.png";
import logLogo from "../assets/language/log.png";
import shellLogo from "../assets/language/shellscript.png";
import plaintextLogo from "../assets/language/plaintext.png";
import jsonLogo from "../assets/language/json.png";
import gitignoreLogo from "../assets/language/gitignore.png";
import rustLogo from "../assets/language/rust.png";
import javaLogo from "../assets/language/java.png";
import cLogo from "../assets/language/c.png";
import cppLogo from "../assets/language/cpp.png";
import pythonLogo from "../assets/language/python.png";
import rubyLogo from "../assets/language/ruby.png";
import goLogo from "../assets/language/go.png";
import swiftLogo from "../assets/language/swift.png";
import kotlinLogo from "../assets/language/kotlin.png";
import dartLogo from "../assets/language/dart.png";
import phpLogo from "../assets/language/php.png";
import csharpLogo from "../assets/language/csharp.png";
import rLogo from "../assets/language/r.png";
import objcLogo from "../assets/language/objective-c.png";
import scalaLogo from "../assets/language/scala.png";
import luaLogo from "../assets/language/lua.png";
import perlLogo from "../assets/language/perl.png";
import haskellLogo from "../assets/language/haskell.png";
import elixirLogo from "../assets/language/elixir.png";
import erlangLogo from "../assets/language/erlang.png";
import fsharpLogo from "../assets/language/fsharp.png";
import groovyLogo from "../assets/language/groovy.png";
import powershellLogo from "../assets/language/powershell.png";
import bashLogo from "../assets/language/bash.png";
import makefileLogo from "../assets/language/makefile.png";
import dockerfileLogo from "../assets/language/dockerfile.png";
import yamlLogo from "../assets/language/yaml.png";
import tomlLogo from "../assets/language/toml.png";
import graphqlLogo from "../assets/language/graphql.png";
import sqlLogo from "../assets/language/sql.png";
import markdownLogo from "../assets/language/markdown.png";

interface LanguageProps {
  language: string;
  image: string;
  color: string;
}

const languages: LanguageProps[] = [
  { language: "typescriptreact", image: tsxLogo, color: "#BA92E7" }, // Darker blue
  { language: "javascriptreact", image: jsxLogo, color: "#6FE964" }, // Darker blue
  { language: "typescript", image: tsLogo, color: "#EF8383" },
  { language: "css", image: cssLogo, color: "#204E9A" }, // Darker blue
  { language: "javascript", image: jsLogo, color: "#BEF26A" }, // Slightly warmer yellow
  { language: "svelte", image: svelteLogo, color: "#D12E00" }, // Deep red
  { language: "jsonc", image: jsoncLogo, color: "#B2B235" }, // Olive
  { language: "Log", image: logLogo, color: "#DDDDDD" }, // Light gray
  { language: "shellscript", image: shellLogo, color: "#6CB944" }, // Deeper green
  { language: "plaintext", image: plaintextLogo, color: "#DDDDDD" }, // Light gray
  { language: "json", image: jsonLogo, color: "#B2B235" },
  { language: "gitignore", image: gitignoreLogo, color: "#C5311B" }, // Darker red
  { language: "rust", image: rustLogo, color: "#C2926E" }, // Softer brown
  { language: "html", image: htmlLogo, color: "#C5431D" }, // Warm red
  { language: "java", image: javaLogo, color: "#3C6B88" }, // Muted blue
  { language: "c", image: cLogo, color: "#004080" }, // Deep navy
  { language: "cpp", image: cppLogo, color: "#004080" },
  { language: "python", image: pythonLogo, color: "#27557E" }, // Dark teal
  { language: "ruby", image: rubyLogo, color: "#A92C2C" }, // Deep ruby
  { language: "go", image: goLogo, color: "#0099CC" }, // Soft cyan
  { language: "swift", image: swiftLogo, color: "#E07A26" }, // Burnt orange
  { language: "kotlin", image: kotlinLogo, color: "#D67233" }, // Orange-red
  { language: "dart", image: dartLogo, color: "#009688" }, // Teal
  { language: "php", image: phpLogo, color: "#665BAA" }, // Dark violet
  { language: "csharp", image: csharpLogo, color: "#501A60" }, // Deep purple
  { language: "r", image: rLogo, color: "#204B72" }, // Dark blue
  { language: "objective-c", image: objcLogo, color: "#3566AD" }, // Softer blue
  { language: "scala", image: scalaLogo, color: "#AB1D1D" }, // Dark red
  { language: "lua", image: luaLogo, color: "#121255" }, // Deep navy
  { language: "perl", image: perlLogo, color: "#007A99" }, // Teal
  { language: "haskell", image: haskellLogo, color: "#503F73" }, // Muted purple
  { language: "elixir", image: elixirLogo, color: "#5E3E5E" }, // Muted violet
  { language: "erlang", image: erlangLogo, color: "#831926" }, // Dark maroon
  { language: "fsharp", image: fsharpLogo, color: "#22668A" }, // Deep blue
  { language: "groovy", image: groovyLogo, color: "#37758C" }, // Muted cyan
  { language: "powershell", image: powershellLogo, color: "#001A3D" }, // Deep navy
  { language: "bash", image: bashLogo, color: "#558B2F" }, // Olive green
  { language: "makefile", image: makefileLogo, color: "#2F4F2F" }, // Dark green
  { language: "dockerfile", image: dockerfileLogo, color: "#2E4045" }, // Deep blue-gray
  { language: "yaml", image: yamlLogo, color: "#9B111E" }, // Dark red
  { language: "toml", image: tomlLogo, color: "#6D3B1B" }, // Deep brown
  { language: "graphql", image: graphqlLogo, color: "#B00074" }, // Dark pink
  { language: "sql", image: sqlLogo, color: "#C47300" }, // Deep orange
  { language: "markdown", image: markdownLogo, color: "#00FFFF" }
];

export default languages;
