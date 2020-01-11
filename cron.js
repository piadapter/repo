  const { promisify } = require('util');
  const exec = promisify(require('child_process').exec);

  async function isRemoteChanged() {
    await exec('git remote update');
    const output = await exec('git status');
    const lines = output.stdout.split('\n');
    const isUpToDate = lines[1].match(
      /Your branch is up to date with/
    );
    return !isUpToDate;
  }

  async function pullRepo() {
    await exec('git pull');
  }

  async function main() {
    if (!(await isRemoteChanged())) {
      return;
    }

    // need to pull repo and start from scratch
    await pullRepo();
    if (await isRemoteChanged()) {
      throw Error('Cannot pull new changes');
    } else {
      console.log('pulled')
    }

    // TODO: stop all services
    // TODO: start all services
  }

  main();

