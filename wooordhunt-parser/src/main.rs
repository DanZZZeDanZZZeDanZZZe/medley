use std::env;
use std::error::Error;
use std::process;
use std::fs;

pub struct ArgsConfig {
    file_path: String
}

impl ArgsConfig {
    fn new(args: &[String]) -> Result<ArgsConfig, &'static str> {
        if args.len() != 2 {
            return Err("Invalid number of arguments!")
        }
        
        return Ok(ArgsConfig {
            file_path: args[1].clone(),
        });
    }
}

pub struct EnglishWordInfo {
    word: String,
    example: String,
}

pub struct EnglishWordsFile {
    content: Vec<EnglishWordInfo>,
    file_path: String,
}

impl EnglishWordsFile {
    fn new(args_config: ArgsConfig) -> Result<EnglishWordsFile, Box<dyn Error>> {
        let text = fs::read_to_string(args_config.file_path.clone())?;
        let mut content: Vec<EnglishWordInfo> = Vec::new();

        for line in text.lines() {
            println!("{}", line);
            let word_and_example: Vec<&str> = line.trim().split("|").collect();
            if word_and_example.len() != 2 {
                return Err(String::from("Invalid string with word and string").into());
            }

            content.push(EnglishWordInfo {
                word: String::from(word_and_example[0]), 
                example: String::from(word_and_example[1]),
            })
        }
        

        return Ok(EnglishWordsFile {
            content,
            file_path: args_config.file_path,
        });
    }
}

fn main() {
    let args: Vec<String> = env::args().collect();

    let args_config = ArgsConfig::new(&args).unwrap_or_else(|err| {
        eprintln!("Problem parsing arguments: {}", err);

        process::exit(1);
    });

    let words_file = EnglishWordsFile::new(args_config).unwrap_or_else(|err| {
        eprintln!("Problem parsing file: {}", err);

        process::exit(1);
    });

    // TODO: add scrapping
}
