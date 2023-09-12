// 获取DOM元素
const welcomeMessage = document.getElementById('welcome-message');
const welcomeDesc = document.getElementById('welcome-desc');

const buyMessage = document.getElementById('buy-message');
const buyDesc = document.getElementById('buy-desc');
const buyModels = document.getElementById('buy-models');
const buyStorage = document.getElementById('buy-storage');
const buySupplier = document.getElementById('buy-supplier');

const joinMessage = document.getElementById('join-message');
const joinDesc = document.getElementById('join-desc');
const joinSalesnum = document.getElementById('join-salesnum');
const joinSalesup = document.getElementById('join-salesup');
const joinSalesoutlet = document.getElementById('join-salesoutlet');

const teamMessage = document.getElementById('team-message');
const teamDesc = document.getElementById('team-desc');

const contactMessage = document.getElementById('contact-message');
const contactDesc = document.getElementById('contact-desc');
const contactDesc2 = document.getElementById('contact-desc2');

// 默认语言
let currentLanguage = 'zh';

// 语言切换函数
function switchLanguage(language) {
    currentLanguage = language;
    updateContent();
}

// 更新页面内容函数
function updateContent() {
    if (currentLanguage === 'en') {
        welcomeMessage.innerHTML = 'Welcome to YitBoo!';
        welcomeDesc.innerHTML = 'YitBoo is the first <strong>Internet-based fabric trading platform</strong> in Foshan, Guangdong. It\'s free to use and is dedicated to providing efficient and convenient services for both fabric suppliers and buyers.Our goal is to make it easy for you to find and sell fabrics, fostering mutually beneficial transactions.Additionally, we offer the latest updates and news from the fabric industry, allowing you to stay ahead in this rapidly evolving field.<br><br><strong>@Foshan YitBoo Tech Co., Ltd</strong>';

        buyMessage.innerHTML = 'YitBoo, first choice for procurement.';
        buyDesc.innerHTML = 'YitBoo, with over two decades of experience in the fabric industry, has built a reputation for integrity and has accumulated extensive market resources. Our extensive supplier network ensures comprehensive support and convenience, making your procurement process simpler and more reliable.<br><br>As a dedicated fabric sales platform, YitBoo is committed to providing you with a rich and diverse online fabric repository. We aim to help you quickly find the fabric you need, ultimately enhancing your business efficiency, with:';
        buyModels.innerHTML = 'Models';
        buyStorage.innerHTML = 'Inventory';
        buySupplier.innerHTML = 'Suppliers';

        joinMessage.innerHTML = 'Join us for mutual growth and success.';
        joinDesc.innerHTML = 'With over 20 years of experience in fabric production and sales, YitBoo boasts a rich customer base that includes renowned domestic and international brands. Our extensive sales channels span across the entire nation, allowing us to distribute your fabrics nationwide and reach a broader audience of potential customers.<br><br>At YitBoo, we take full responsibility for fabric promotion, customer inquiries, shipping, and after-sales service. You can simply provide us with your fabric information, and we will take care of the rest. Our track record speaks for itself:';
        joinSalesnum.innerHTML = 'Monthly Sales Volume';
        joinSalesup.innerHTML = 'Sales Growth';
        joinSalesoutlet.innerHTML = 'Sales Network';
        
        teamMessage.innerHTML = 'A Professional Team at Your Service.';
        teamDesc.innerHTML = 'The core members of the YitBoo team graduated from renowned institutions both domestically and internationally, including Sun Yat-sen University, Université Paris-Saclay, and Aalto University. They have previously worked at prominent internet companies such as Alibaba, Tencent, and NetEase, accumulating years of experience in fabric trading, platform operation, and digital marketing. Our professional team is here to support your business expansion.<br><br>Furthermore, our network of partners spans major textile markets across China, including China Textile City, Zhujiang International Textile City, China Textile Garment City, Shishi International Textile City, and Jiangnan International Fashion City, among others.';

        contactMessage.innerHTML = 'Contact Us';
        contactDesc.innerHTML = 'WhatsApp: +86 156 2277 2205<br><br>Email: machengwei@yitboo.com<br><br>Tel.: +86 0757 8579 8189<br><br>Address: G30, Pingdi Guoji Niuzai Cheng, YanBu Town, Nanhai District, Foshan City, Guangdong Province, China.';
        contactDesc2.innerHTML = 'If you have WeChat, scan these QR codes to know more about us!'

    } else if (currentLanguage === 'zh') {
        welcomeMessage.innerHTML = '买布卖布，就上亿布。';
        welcomeDesc.innerHTML = '亿布为佛山首个<strong>互联网+面料交易平台</strong>，免费使用，致力为面料供应商及采购商双方提供高效便捷的服务，让您轻松找布卖布，共创双赢。同时我们也提供最新的面料行业资讯，让您提前走到发展风口。<br><br><strong>@佛山市亿布信息科技有限公司</strong>';

        buyMessage.innerHTML = '亿布，您的采购首选。';
        buyDesc.innerHTML = '亿布在布料行业耕耘20余年，多年诚信经营，累积大量市场资源，供应网络丰富，为您提供全面的支持和便利，让您的采购过程更加简单可靠。<br><br>亿布作为专业的面料销售平台，致力于为您提供一个资源丰富、品类齐全的在线面料库，助您快速找到所需面料，提高商业效率。我们拥有：';
        buyModels.innerHTML = '面料型号';
        buyStorage.innerHTML = '布匹仓存';
        buySupplier.innerHTML = '供应商';

        joinMessage.innerHTML = '加入亿布，共赢发展。';
        joinDesc.innerHTML = '亿布拥有20余年面料生产及销售经验，客户资源丰富，涵盖国内外知名品牌，销售渠道覆盖全国，庞大的销售网络能够将您的布料推向全国，触达更多潜在客户。<br><br>亿布将全权负责布料的推广、客户咨询、发货、售后等环节，您只需把面料信息交付给我们，就可足不出门地把面料销售到全国。我们的成绩：';
        joinSalesnum.innerHTML = '月销售量';
        joinSalesup.innerHTML = '销售增长';
        joinSalesoutlet.innerHTML = '销售点';

        teamMessage.innerHTML = '专业团队，为您服务。';
        teamDesc.innerHTML = '亿布团队核心成员毕业于中山大学、巴黎萨克雷大学、芬兰阿尔托大学等国内外知名院校，曾就职阿里巴巴、腾讯、网易等知名互联网企业，拥有多年面料交易、平台运营、数字营销经验，专业团队支持您的业务拓展。<br><br>我们的合作伙伴也覆盖全国各大纺织市场，包括中国轻纺城、珠江国际纺织城、中纺华丽、石狮国际轻纺城及江南国际服装城等。';

        contactMessage.innerHTML = '联系我们';
        contactDesc.innerHTML = '电话：0757-85798189<br>邮箱：machengwei@yitboo.com<br>地址：广东省佛山市南海区盐步平地国际牛仔城G30号';
        contactDesc2.innerHTML = '公众号：<strong>@亿布信息 YitBoo</strong><br> 小程序：<strong>@亿布信息丨布料交易布料库</strong> <br>小红书：<strong>@亿布信息-在线布料库</strong><br> 抖音号：<strong>@小亿说布</strong>';
    }
}

// 添加点击事件监听器
document.getElementById('switch-to-english').addEventListener('click', () => switchLanguage('en'));
document.getElementById('switch-to-chinese').addEventListener('click', () => switchLanguage('zh'));

// 初始页面内容
updateContent();
