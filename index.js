// Guard against an asyn operation being called multiple times whilst in progress

function AsyncDebounce(operation, options) {
  call.inprogress = false;
  call.queued = false;
  call.queuedArgs = null;

  options = options || {};

  function complete() {
    if (call.queued) {
      call.queued = false;
      operation.call(options.thisArg || global, call.queuedArgs, complete);
      call.queuedArgs = null;
    } else {
      call.inprogress = false;
    }
  }

  function call() {
    if (call.inprogress === false) {
      call.inprogress = true;
      operation.call(options.thisArg || global, arguments, complete);
    } else {
      call.queued = true;
      call.queuedArgs = arguments;
    }
  }

  return call;
}

module.exports = AsyncDebounce;
