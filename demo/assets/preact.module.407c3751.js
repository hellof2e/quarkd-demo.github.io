"function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
