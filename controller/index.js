import AppInfo from '../model';

export const getAppInfo = async (req, res) => {
  const { packageName } = req.params;
  try {
    return res
      .status(200)
      .json({ appInfo: await AppInfo.findOne({ packageName }) });
  } catch (error) {
    return res
      .status(error.status)
      .json({ error: true, message: "Couldn't able to get all Apps!" });
  }
};

export const getAllAppInfos = async (req, res) => {
  try {
    return res.status(200).json({ appInfo: await AppInfo.find({}) });
  } catch (error) {
    return res
      .status(error.status)
      .json({ error: true, message: "Couldn't able to get all appInfo!" });
  }
};

export const addAppInfo = async (req, res) => {
  const { packageName, imageUrl } = req.body;
  const appInfo = new AppInfo({ packageName, imageUrl });
  try {
    return res.status(201).json({ AppInfo: await appInfo.save() });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: `Couldn\'t able to get the AppInfo. ${error}`,
    });
  }
};

export const updateAppInfo = async (req, res) => {
  const { oldPackageName } = req.params;

  const { packageName, imageUrl } = req.body;
  try {
    const appInfo = await AppInfo.findOne({ packageName: oldPackageName });
    const update = {
      packageName: packageName || oldPackageName,
      imageUrl: imageUrl || appInfo.imageUrl,
    };

    await AppInfo.findByIdAndUpdate(appInfo._id, update);
    return res
      .status(201)
      .json({
        message: await AppInfo.findOne({ packageName: update.packageName }),
      });
  } catch (error) {
    return res.status(500).json({ error: true, message: `${error}` });
  }
};

export const removeAppInfo = async (req, res) => {
  const { packageName } = req.body;
  try {
    return res
      .status(200)
      .json({ message: await AppInfo.remove({ packageName }) });
  } catch (error) {
    return res.status(error.status).json({ error: true, message: `${error}` });
  }
};
