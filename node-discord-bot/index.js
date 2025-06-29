import { Client, GatewayIntentBits, Partials } from 'discord.js';
import 'dotenv/config';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildPresences,
  ],
  partials: [Partials.GuildMember],
});

client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('🏓 Pong!');
  }

  if (interaction.commandName === 'stats') {
    const guild = interaction.guild;
    const members = await guild.members.fetch();

    const total = members.size;
    const online = members.filter((m) => m.presence?.status === 'online').size;
    const bots = members.filter((m) => m.user.bot).size;
    const humans = total - bots;

    await interaction.reply({
      embeds: [
        {
          title: '📊 Server Stats',
          color: 0x5865f2,
          fields: [
            { name: '👥 Total Members', value: `${total}`, inline: true },
            { name: '🟢 Online Members', value: `${online}`, inline: true },
            { name: '🤖 Bots', value: `${bots}`, inline: true },
            { name: '👤 Humans', value: `${humans}`, inline: true },
          ],
          footer: { text: `Server: ${guild.name}` },
          timestamp: new Date(),
        },
      ],
    });
  }
});

client.login(process.env.TOKEN);
