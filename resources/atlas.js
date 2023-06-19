const output = document.querySelector('.output');
const input = document.querySelector('input');
var personalRigCPU = "i3 INTEL 1.5 GHz";
var personalRigRAM = "8GB DDR3";
var personalRigGPU = "Onboard Graphics"
var totalDiskSpace = "20GB";
var usedDiskSpace = "3GB";
var personalFunds = 400
var market = {};
var lastCommand = "";


input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const command = input.value;
        const result = executeCommand(command);
        displayOutput(command, result);
        lastCommand = input.value
        input.value = '';
    }
    if (event.key === 'ArrowUp') {
        input.value = lastCommand;
    }
});

function executeCommand(command) {
    command = command.toLowerCase();
    var splitCommand = command.split(" ");
    let rootCommand = splitCommand[0];
    let base1 = splitCommand[1];
    let base2 = splitCommand[2];
    let base3 = splitCommand[3];
    let result;
    // Your custom command execution logic goes here
    switch (rootCommand) {
        case 'rig':
            //Command : rig
            result = 'Processor: ' + personalRigCPU + "   |  |   RAM: " + personalRigRAM + "   |  |   GPU: " + personalRigGPU +
             "   |  |   Disk: " + usedDiskSpace +"/" + totalDiskSpace;
            break;
        case 'help':
            // Command : help
            result = 'Available commands can be found on our KBA website: <br> <br> https://articles.fibrenetwork.dev/atlas/commands <br><br>';
            break;
        case 'report':
            // Command : disk
            if (base1 == "disk"){
                result = "Disk Report: " + usedDiskSpace + "/" + totalDiskSpace;
            }
            else if (base1 == 'funds'){
                result = "$" + personalFunds.toString();
            }
            else {
                result = "Please Choose a report: <br> : Funds <br> : Disk"
            }
            break;
        case 'upgrade':
            //COmmand : upgrade
            if (base1 == "quote"){
                if (base2 == "cpu"){
                    if (base3 == '1'){
                        result = '$200';
                    }
                }
            }
            if (base1 == "buy"){
                if (base2 == "cpu"){
                    if (base3 == "1"){
                        result == "Bought";
                        personalRigCPU = "i5 INTEL 2.3 GHz";
                        personalFunds = personalFunds - 200;
                    }
                }
            }
        default:
            result = 'Command not found. Type "help" for a list of available commands.';
            break;
    }
    // Main return
    return result + "<br><br>";
}

function displayOutput(command, result) {
    //Display handler
    const commandLine = document.createElement('div');
    commandLine.innerHTML = '<span class="prompt">C:\\></span> ' + command;
    output.appendChild(commandLine);
    const outputLine = document.createElement('div');
    outputLine.innerHTML = result;
    output.appendChild(outputLine);
}