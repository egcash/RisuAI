

export const languageChinese = {
    formating:{
        'main': "主要提示词",
        'jailbreak': "越狱提示词",
        'chats': "过去的聊天",
        'lorebook': "Lorebook",
        'globalNote': "全局注释",
        'authorNote': "作者的注释",
        'lastChat': "最后的聊天",
        "description": "角色描述"
    },
    errors:{
        toomuchtoken: '错误：所需的最小token数大于最大上下文大小。',
        unknownModel: '错误：选择了未知的模型',
        httpError: '错误：请求出错：',
        noData: '文件中没有数据，或者文件已损坏',
        onlyOneChat: '必须至少有一次聊天',
        alreadyCharInGroup: "群组中已存在同名的角色。"
    },
    showHelp: "显示帮助",
    help:{
        model: "模型选项是用于聊天的主要模型。",
        submodel: "辅助模型是用于分析情绪图像，自动建议等的模型。推荐使用gpt3.5。",
        oaiapikey: 'OpenAI的API密钥。你可以在https://platform.openai.com/account/api-keys处获取。',
        mainprompt: '主提示词选项设定了默认模型的行为。',
        jailbreak: '当角色中启动NSFW(成人模式)/越狱开关时，NSFW(成人模式)/越狱提示词选项将被激活。',
        globalNote: '强烈影响模型行为的笔记，也被称为UJB。在所有角色中都起作用。',
        autoSuggest: '在自动建议用户回应时，用于生成选项的提示词。',
        formatOrder: "提示词的格式化顺序。较低的块对模型的影响更大。",
        forceUrl: "如果不为空，请求将会被发送到你输入的URL。",
        tempature: "较低的值使角色紧密遵循提示词，但它更可能像机器一样回应。\n较高的值将导致创造性的行为，但角色的回应可能更容易崩溃。",
        frequencyPenalty: "较高的值防止在回应中使用重复的单词，但角色的回应可能更容易崩溃。",
        presensePenalty: "较高的值防止在所有上下文中使用重复的单词，但角色的回应可能更容易崩溃。",
        sdProvider: "图像生成的提供者。",
        msgSound: "角色回应时播放*叮*的声音",
        charDesc: "角色的简要描述。这会影响角色的回应。",
        charFirstMessage: "角色的第一条信息。这会极大地影响角色的回应。",
        charNote: "强烈影响模型行为的笔记。嵌入到当前角色。也被称为UJB。",
        toggleNsfw: "开启和关闭NSFW(成人模式)/越狱提示词。",
        lorebook: "lorebook是AI的用户制作的词典。只有当上下文中有激活键时，AI才会看到它。",
        loreName: "lorebook的名称。它不会影响AI。",
        loreActivationKey: "如果上下文中存在其中一个激活键，lorebook就会被激活，提示词将会进入。用逗号分隔。",
        loreorder: "如果插入顺序更高，它会更多地影响模型，而当激活的lorebook较多时，它会被剪裁的更少。",
        bias: "偏置是一种修改字符串出现概率的键值数据。\n它可以从-100到100，更高的值会更可能出现，更低的值则不太可能出现\n警告：如果分词器出错，它可能无法正常工作。",
        emotion: "情绪图像选项根据角色的情绪显示图像，该情绪是通过分析角色的回应得出的。你必须输入情绪名称作为单词*(如 joy，happy，fear 等)*。如果存在，以**neutral**命名的情绪将成为默认情绪。必须有3个以上的图像才能正常工作。",
        imggen: "图像生成选项从外部程序生成并显示图像。该图像是通过分析当前聊天生成的图像提示词生成的。\n\n图像生成是基于键值参数进行分析的，这些参数可以在下面配置。"
            + "\n\n'always'键总是应用，并且不会改变。'negative'键对于图像生成始终应用负值。"
            + "\n\n其他键的值将根据随着聊天的进行而改变。"
            + "\n\n如果一个键的名字前面有特殊字符，它就有特殊的效果。"
            + "\n- 如果键以**|**开始，键的值将不会改变。"
            + "\n- 如果键以**$**开始，键的值更有可能改变。"
            + "\n\n当图像首次生成时，你只能通过修改下面的'当前图像生成数据'来改变它。",


        regexScript: "正则表达式脚本是一个自定义脚本，它将匹配到的IN字符串替换为OUT。\n\n有四种类型的选项。"
            + "\n\n- **修改输入** 修改用户的输入"
            + "\n\n- **修改输出** 修改角色的输出"
            + "\n\n- **修改请求数据** 在发送时修改当前聊天数据。"
            + "\n\n- **修改显示** 在显示时只修改文本，而不修改聊天数据。"
            + "\n\nIN必须是一个没有标记且开始和结束时没有斜杠的正则表达式。\n\nOUT是一个可以包含替换模式的字符串。这些是模式："
            + "\n\n- $$\n\n    - 插入$"
            + "\n\n- $&\n\n    - 插入匹配的子字符串。"
            + "\n\n- $`\n\n    - 插入匹配子字符串之前的字符串部分。"
            + "\n\n- $1\n\n    - 插入第一个匹配的组。与其他数字如2，3等一起工作..."
            + "\n\n- $(name)\n\n    - 插入命名的组"
            + "\n\n如果OUT以**@@**开始，它不会替换字符串，而是在找到匹配字符串时产生特殊效果。"
            + "\n\n- @@emo (情绪名称)\n\n    - 如果角色处于情绪图像模式，将(情绪名称)设置为情绪，并阻止默认设置。",
        experimental: "这是一个实验性功能。可能不稳定。",
        oogaboogaURL: "如果你的WebUI支持api的旧版本，你的url应该看起来*像https:.../run/textgen*\n\n"
            + "如果你的WebUI支持api的新版本，你的url应该看起来像*https://.../api/v1/generate*并且使用api服务器作为主机，并在参数中添加 --api。",
        exampleMessage: "影响角色输出的示例对话。它不会永久性地使用token。"
            + "\n\n对话的示例格式："
            + "\n\n```\n<START>\n{{user}}: hi\n{{char}}: hello\n<START>\n{{user}}: hi\nHaruhi: hello\n```"
            + "\n\n```<START>```标记新对话的开始。",
        creatorQuotes: "注意第一条消息上方的出现。用于向用户通报关于该角色的信息。它不会进入提示词。",
        systemPrompt: "如果不为空，将替换设置中的主提示词。",
        chatNote: "强烈影响模型行为的笔记。嵌入到当前聊天中。也被称为记忆或ujb。",
        personality: "关于角色个性的简短描述。\n\n**不建议使用此选项。改为在角色描述中进行描述。**",
        scenario: "关于角色情景的简短描述。\n\n**不建议使用此选项。改为在角色描述中进行描述。**",
        utilityBot: "激活后，它会忽略主提示词。\n\n**不建议使用此选项。改为修改系统提示词。**",
        loreSelective: "如果已切换选择模式，则激活密钥和次级密钥都应有匹配项才能激活lorebook。",
        loreRandomActivation: "如果启用了使用概率条件，如果lorebook的其他条件都已满足，每次发送聊天时，lorebook将以“概率”设置的概率被激活。",
        additionalAssets: "在你的聊天中显示的额外资源。 \n\n - 使用 `{{raw::<asset name>}}` 作为路径。\n - 使用 `{{img::<asset name>}}` 作为图片\n - 使用 `{{video::<asset name>}}` 作为视频\n - 使用 `{{audio::<asset name>}}` 作为音频 (建议放在Background HTML中)",
        superMemory: "SuperMemory 通过给 AI 提供总结数据使你的角色记忆更多信息。\n\n"
            + "SuperMemory 模型是一个总结文本的模型。推荐使用Davinci，除非是具有超过2000个token数的高度总结能力的成人模型，否则不推荐使用辅助模型。\n\n"
            + "SuperMemory 提示词决定了应发送什么提示词进行总结。如果你留空，它将使用默认提示词。建议留空。\n\n"
            + "在所有设置都完成后，你可以在角色的设置中启用它。",
        replaceGlobalNote: "如果不为空，将当前的全局笔记替换为此。",
    },
    setup:{
        chooseProvider: "选择AI提供商",
        openaikey: "使用API Key的OpenAI（推荐）",
        openaiProxy: "OpenAI反向代理",
        setupmodelself: "其他 / 我将自行设置",
        inputApiKey: "在这里输入API Key",
        apiKeyhelp: "你可以从以下链接获取api key：",
        setupSelfHelp: "在欢迎屏幕结束后，在设置中自行设置。",
        theme: "选择你的主题",
        themeDescWifulike: "不适配手机",
        themeDescWifuCut: "适配手机",
        texttheme: "选择你的文本颜色",
        inputName: "最后，输入你的昵称。"
    },
    confirm: "确认",
    goback: "返回",
    botSettings: '机器人设置',
    model: "模型",
    apiKey: 'API Key',
    providerURL: '请求URL',
    providerJSON: '请求主体JSON',
    mainPrompt: "主要提示词",
    jailbreakPrompt: "NSFW(成人模式)/越狱提示词",
    globalNote: "全局注释",
    autoSuggest: "自动建议",
    tokens: 'token数',
    maxContextSize: '最大上下文大小',
    maxResponseSize: '最大响应大小',
    temperature: '温度',
    frequencyPenalty: '频率惩罚',
    presensePenalty: '出现惩罚',
    advancedSettings: '高级设置',
    advancedSettingsWarn: "警告：如果你不知道选项的作用，不要改变它！",
    formatingOrder: "格式化顺序",
    authorNote: "作者注释",
    firstMessage: '第一条消息',
    description: '描述',
    jailbreakToggle: '开启NSFW(成人模式)/越狱',
    charIcon: "角色图标",
    characterDisplay: "角色展示",
    viewScreen: '额外角色屏幕',
    none: "无",
    emotionImage: "情绪图像",
    noImages: "没有图像",
    noBias: "无偏差",
    image: '图像',
    name: '名称',
    emotion: "情绪名称",
    value: "值",
    reroll: '重新生成',
    chatList: '聊天列表',
    removeChat: "删除此消息？",
    loreBook: 'lorebook',
    character: "角色",
    Chat: "聊天",
    globalLoreInfo: "角色lorebook应用于角色中的所有聊天。",
    group: "群组",
    groupLoreInfo: "群组lorebook应用于群组中的所有聊天。",
    localLoreInfo: "聊天lorebook仅应用于当前聊天。",
    removeConfirm: "你真的想删除：",
    removeConfirm2: "你真的真的想删除：",
    exportConfirm: "你想要导出这个吗？",
    insertOrder: '插入顺序',
    activationKeys: '激活键',
    activationKeysInfo: '用逗号分隔',
    prompt: '提示词',
    loreBookDepth: "lorebook搜索深度",
    loreBookToken: "lorebook最大token数",
    removeCharacter: "删除角色",
    removeGroup: "删除群组",
    exportCharacter: "导出角色",
    userSetting: "用户设置",
    username: '你的名字',
    userIcon: "你的图标",
    successExport: "成功导出并下载到你的下载目录",
    successImport: "成功导入",
    importedCharacter: '已导入角色',
    alwaysActive: "始终活跃",
    additionalPrompt: "额外的提示词",
    descriptionPrefix: "描述前缀",
    forceReplaceUrl: "反向代理",
    emotionWarn: "使用辅助模型。",
    plugin: "插件",
    language: "语言",
    UiLanguage: "UI语言",
    createfromScratch: "从头开始创建",
    importCharacter: '导入角色',
    translator: "翻译",
    disabled: "禁用",
    noPluginSelected: "模型选为插件，但没有选择插件。",
    text: "文本",
    UISize: "聊天文本大小",
    newVersion: "找到更新，你想要安装吗？",
    display: "显示和音频",
    useCustomBackground: "自定义背景",
    translateInput: "翻译输入",
    autoTranslation: "自动翻译",
    fullscreen: "全屏",
    playMessage: "播放消息音频",
    iconSize: "图标大小",
    createGroup: "创建群聊",
    groupIcon: "群组图标",
    single: "单人",
    multiple: "多人",
    useCharLorebook: "使用角色的lorebook",
    selectChar: "选择角色",
    askLoadFirstMsg: "我们应该加载第一条消息吗？",
    theme: "主题",
    editOrder: "编辑顺序",
    autoMode: "自动模式",
    submodel: "辅助模型",
    timeOutinSec: "超时（以秒为单位）",
    emotionPrompt: "情绪提示词",
    singleView: "单视图",
    SpacedView: "多角色视图",
    emphasizedView: "双角色视图",
    pluginWarn: "插件在隔离环境中运行，但安装恶意插件可能会导致问题。",
    createGroupImg: "生成群组图标",
    waifuWidth: "虚拟角色聊天宽度",
    savebackup: "将备份保存到谷歌",
    loadbackup: "从谷歌加载备份",
    files: "文件",
    backupConfirm: "你真的想保存备份吗？",
    backupLoadConfirm: "你真的想加载备份吗？所有数据将会丢失！",
    backupLoadConfirm2: "你真的真的想加载备份吗？所有数据将会丢失！",
    pasteAuthCode: "请从弹出窗口复制授权码并粘贴在这里：",
    others: "其他",
    presets: "预设",
    imageGeneration: "图像生成",
    provider: "提供者",
    key: "键",
    noData: "无数据",
    currentImageGeneration: "当前图像生成数据",
    promptPreprocess: "使用提示词预处理",
    SwipeRegenerate: "使用滑动重新生成",
    instantRemove: "当消息被删除时，立即删除随后的消息",
    instantRemoveConfirm: "你想删除单条消息吗？如果你选择否，那么随后的消息也将被删除。",
    textColor: "文本颜色",
    classicRisu: "经典的Risu",
    highcontrast: "高对比度",
    quickPreset: "你可以通过Ctrl + (预设的索引)快速更改预设",
    requestretrys: "请求失败时重试",
    utilityBot: "实用机器人",
    ShowLog: "显示请求日志",
    waifuWidth2: "虚拟角色大小",
    sayNothing: "当没有输入字符串时，输入'Say Nothing'",
    regexScript: "正则表达式脚本",
    type: "类型", editInput: "修改输入",
    editOutput: "修改输出",
    editProcess: "修改请求数据",
    loadLatest: "加载最新备份",
    loadOthers: "加载其他备份",
    exampleMessage: "示例消息",
    creatorNotes: "创作者的评论",
    systemPrompt: "系统提示词",
    characterNotes: "角色备注",
    personality: "个性",
    scenario: "情境",
    alternateGreetings: "备用问候语",
    unrecommended: "不推荐",
    chatNotes: "聊天笔记",
    showUnrecommended: "显示不推荐的设置",
    altGreet: "备选首条消息",
    scripts: "脚本",
    settings: "设置",
    selective: "选择性的",
    SecondaryKeys: '次要键',
    useGlobalSettings: "使用全局设置",
    recursiveScanning: "递归扫描",
    creator: "创作者",
    CharVersion: "角色版本",
    Speech: "语音",
    ToggleSuperMemory: "开启超级记忆",
    SuperMemory: "超级记忆",
    useExperimental: "启用实验性功能",
    showMemoryLimit: "显示记忆限制",
    roundIcons: "圆形图标",
    streaming: "流式传输(打字机效果)",
    chatBot: '聊天机器人',
    otherBots: '其他机器人',
    user: "用户",
    additionalAssets: "额外资源",
    editDisplay: "修改显示",
    community: "社区",
    textBackgrounds: "自定义文本屏幕颜色",
    textBorder: "文本轮廓",
    textScreenRound: "圆形文本屏幕",
    textScreenBorder: "文本屏幕边框",
    ttsReadOnlyQuoted: "仅朗读引用",
    ttsStop: "停止TTS",
    askRemoval: "删除消息前确认",
    replaceGlobalNote: "替换全局备注",
    charLoreBook: '角色lorebook',
    globalLoreBook: '全局lorebook',
    globalRegexScript: "全局正则表达式",
    accessibility: "可访问性",
    sendWithEnter: "使用Enter键发送",
    clickToEdit: "点击文本以编辑",
    setNodePassword: "设置你的安全密码",
    inputNodePassword: "输入你的密码。如果你记不住，删除服务器文件中的save/__password.txt，并重启服务器。",
    simple: "简易",
    advanced: "高级",
    askReRollAutoSuggestions: "重新生成自动建议",
    creatingSuggestions: "正在生成建议...",
    orderByOrder: "按顺序交谈",
    removeFromGroup: "你真的要将{{char}}从群组中删除吗？",
    talkness: "健谈程度",
    active: "活跃",
    loreRandomActivation: "使用概率条件",
    activationProbability: "概率",
    shareCloud: "分享到RisuRealm",
    hub: "RisuRealm",
    tags: "标签",
    copied: "已复制",
    useChatCopy: "使用聊天复制",
    useChatSticker: "使用聊天贴纸",
    autoTranslateInput: "使用自动翻译输入",
    enterMessageForTranslateToEnglish: "输入要翻译为英语的消息",
    recent: '最新',
    downloads: '下载量',
    trending: "热度",
    imageCompression: "图像压缩"
}