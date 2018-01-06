//  Useful for having an expiring offer e.g. 48h after signup they get a big discount. FOMO & Reward users who take quick actions

//  On django do something like this:
//  date_joined = request.user.date_joined
//  time_now = datetime.datetime.now()
//  time_difference = time_now - date_joined
//  time_difference_in_minutes = time_difference / datetime.timedelta(minutes=1)


timeLeft(){
    // axios.get('/time-left') etc, etc
    const timeInMinutes = this.timeInMinutes
    const days = Math.floor(timeInMinutes/1440)
    const hours = Math.floor(timeInMinutes%1440/60)
    const minutes = timeInMinutes%60
    return ( `${days} days ${hours} hours ${minutes} minutes left` )
}

// OR:

daysLeft () {
  return Math.floor(this.totalMinutes / 1440)
},
hoursLeft () {
  return Math.floor(this.totalMinutes / 60) - (this.daysLeft * 24)
},
minutesLeft () {
  return Math.floor(this.totalMinutes - (this.daysLeft * 1440) - (this.hoursLeft * 60))
}
