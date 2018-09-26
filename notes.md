#App

#BotsPage

- state:
  -- enlistedRobots = robots in the army
  -- robots = all robots from fetch

# 1) BotCollection

-- BotsPage --> enlistRobot() --> BotCard

# 2) BotArmy

- props: enlistedRobots

## BotCard

-- BotCollection --> enlistRobot()

### BotSpecs
