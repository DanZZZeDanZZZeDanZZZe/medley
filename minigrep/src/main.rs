use std::env;
use std::process;

use minigrep::Config;
use minigrep::run;

fn main() {
    let args: Vec<String> = env::args().collect();

    let config = Config::new(&args).unwrap_or_else(|err| {
        eprintln!("Problem parsing arguments: {}", err);

        process::exit(1);
    });

    println!("\nSearching for \"{}\"", config.query);
    println!("In file \"{}\"\n", config.filename);
    println!("-----------\n");

    // "if let" is equal:
    //
    // match optional {
    // Err(e) => {
    //     println!("Application error: {}", e);
    // },
    // _ => {},
    if let Err(e) = run(config) {
        eprintln!("Application error: {}", e);

        process::exit(1);
    }

    println!("\n-----------");
}


