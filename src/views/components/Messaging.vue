<template>
    <vue-advanced-chat
      class="w-full message-box"
      :show-files="false"
      :show-emojis="false"
      :show-reaction-emojis="false"
      :loading-rooms="isLoadingRooms"
      :rooms-loaded="!isLoadingRooms"
      :messages-loaded="messagesLoaded"
      :show-search="false"
      :show-add-room="false"
      :current-user-id="user.id"
      :rooms="JSON.stringify(rooms)"
      :messages="JSON.stringify(messages)"
      :room-actions="JSON.stringify(roomActions)"
      @send-message="sendMessage"
      @fetch-messages="fetchMessages"
    />
  </template>

  <script>
  import {
      register
  } from 'vue-advanced-chat';
  import pb from '@/services/PocketConfig';

  register();

  export default {
      data: () => ({
          isLoadingRooms: false,
          messagesLoaded: false,
          selectedBot: {},
          user: {},
          rooms: [],
          conversations: [],
          messages: [],
          roomActions: []
      }),

      async mounted() {
          if (pb.authStore && pb.authStore.model) {
            this.user = pb.authStore.model;
            await this.getBots()
            for (let index = 0; index < this.conversations.length; index++) {
                const conversation = this.conversations[index];
                pb.collection('conversations').subscribe(conversation.id, async (e) => {
                    console.log("conversation:", e.record)
                    if (!e.record.lastMessageId) return;
                    const message = await pb.collection('messages').getOne(e.record.lastMessageId);
                    if (e.record.user == pb.authStore.model.id) {
                        let i = this.rooms.findIndex(el => el.roomId == this.selectedBot.roomId)
                        if (message.sender == pb.authStore.model.id) {
                            setTimeout(() => {
                                this.rooms[i].typingUsers.push(this.selectedBot.roomId)
                            }, 1000);
                        } else {
                            this.rooms[i].typingUsers = []
                        }
                        this.messages.push(this.convertJson(message))
                    }
                });
            }
          }
      },
      computed: {
        avatar: function() {
          return `${process.env.VUE_APP_POCKET_API}/api/files/_pb_users_auth_/${this.user.id}/${this.user.avatar}`
        }
      },
      methods: {
        async getBots() {
            this.isLoadingRooms = true;
            const apiUrl = `${process.env.VUE_APP_NODE_API}/api/bots`;
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: new Headers({
                    'Authorization': `${pb.authStore.baseToken}`
                })
            });
            const data = await response.json();
            this.conversations = data.conversations
            this.rooms = data.bots.map((el, key) => {
                let conversation = data.conversations.find(subel => subel.bot == el.id)
                return {
                    roomId: el.id,
                    roomName: el.name,
                    index: key,
                    avatar: `assets/img/${el.username}-teacher.png`,
                    lastMessage: conversation ? {
                        _id: conversation.id,
                        content: conversation.lastMessage || " ",
                        senderId: el.id,
                        username: el.name,
                        timestamp: conversation.lastMessage ? `${(new Date(conversation.updated)).getHours()}:${(new Date(conversation.updated)).getMinutes()}` : null
                    } : {
                        content: " ",
                    },
                    users: [{
                            _id: this.user.id,
                            username: this.user.name,
                            status: {
                                state: 'online'
                            }
                        },
                        {
                            _id: el.id,
                            username: el.name,
                            status: {
                                state: 'online'
                            }
                        }
                    ],
                    typingUsers: []
                }
            })

            this.isLoadingRooms = false;
        },
        convertJson(inputJson) {

            const date = new Date(inputJson.created);
            const formattedDate = `${date.getDate()} ${date.toLocaleString('en-US', { month: 'long' })}`;
            const formattedTime = `${date.getHours()}:${date.getMinutes()}`;

            const outputJson = {
                _id: inputJson.id,
                indexId: inputJson.id,
                content: inputJson.content.text,
                senderId: inputJson.sender,
                username: inputJson.sender === this.user.id ? this.user.name : this.selectedBot.name,
                avatar: inputJson.sender === this.user.id ? this.avatar : this.selectedBot.avatar,
                date: formattedDate,
                timestamp: formattedTime,
                system: inputJson.content.role === 'system',
                saved: true,
                distributed: true,
                seen: true,
                disableActions: true,
                disableReactions: true
            };

            return outputJson;
        },
        sendMessage: function(obj) {

            const message = obj.detail[0].content;
            const botId = obj.detail[0].roomId;

            const apiUrl = `${process.env.VUE_APP_NODE_API}/api/message/bot_id/${botId}`;

            fetch(apiUrl, {
                method: 'POST',
                headers: new Headers({
                    'Authorization': `${pb.authStore.baseToken}`,
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    message
                })
            });

        },
        //start converation
        startConversation: async function (botId) {
            const apiUrl = `${process.env.VUE_APP_NODE_API}/api/conversation/bot_id/${botId}`;
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: new Headers({
                    'Authorization': `${pb.authStore.baseToken}`
                })
            });
            const { conversation } = await response.json();
            return conversation
        },
        fetchMessages: async function (obj) {
            setTimeout(() => {
                const messageBox = document.querySelector('.message-box');
                window.scrollTo({
                    top: messageBox.offsetTop + 150,
                    behavior: 'smooth'
                });
            }, 100);
            this.messagesLoaded = false
            let botId = obj.detail[0].room.roomId
            let conversation = await this.startConversation(botId)
            this.selectedBot = this.rooms.find(el => el.roomId == botId)
            const apiUrl = `${process.env.VUE_APP_NODE_API}/api/conversation/${conversation.id}/messages`;
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: new Headers({
                    'Authorization': `${pb.authStore.baseToken}`
                })
            });
            const {messages} = await response.json();
            this.messages = messages.map(el => this.convertJson(el))
            this.messagesLoaded = true
        }
      }
  };
</script>