const grab_process_argv = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1
    return process.argv[indexAfterFlag]
}

const greeting = grab("--greeting")
const user = grab("--user")

// example would be node file_name --user John --greeting "Hello"

