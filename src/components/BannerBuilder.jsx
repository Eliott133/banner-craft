export default function BannerBuilder({ formData, onFormDataChange }) {

    const basicColors = [
        '41, 128, 185',
        '255, 127, 80',
        '64, 224, 208',
        '243, 156, 18',
        '0, 0, 128',
        '142, 69, 133'
    ];

    const handleChange = (e) => {
        onFormDataChange({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleColorSelect = (color) => {
        onFormDataChange({
            ...formData,
            backgroundColor: color
        });
    };

    return (
        <div className="relative group">
            {/* 3D Card Effect */}
            <div className="relative transform transition-all duration-300 group-hover:-translate-y-2 group-hover:rotate-0 rotate-1 ">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-xl">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Customize Your Offer Banner</h3>
                    
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <input
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                rows="3"
                                placeholder="e.g., Special summer sale! Don't miss out..."
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                CTA Button Text
                            </label>
                            <input
                                type="text"
                                name="ctaText"
                                value={formData.ctaText}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                placeholder="e.g., Shop Now"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Original Price
                                </label>
                                <input
                                    type="number"
                                    name="originalPrice"
                                    value={formData.originalPrice}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="99.99"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Discounted Price
                                </label>
                                <input
                                    type="number"
                                    name="discountedPrice"
                                    value={formData.discountedPrice}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="79.99"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Currency
                                </label>
                                <select
                                    name="currency"
                                    value={formData.currency}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                >
                                    <option value="EUR">EUR (€)</option>
                                    <option value="USD">USD ($)</option>
                                    <option value="GBP">GBP (£)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Language
                                </label>
                                <select
                                    name="language"
                                    value={formData.language}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                >
                                    <option value="fr">French</option>
                                    <option value="en">English</option>
                                    <option value="es">Spanish</option>
                                    <option value="de">German</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Background Color
                            </label>
                            <div className="flex items-center space-x-2 justify-center">
                                {basicColors.map((color) => (
                                    <button
                                        key={color}
                                        type="button"
                                        onClick={() => handleColorSelect(color)}
                                        className={`w-8 h-8 aspect-square rounded-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
                                        style={{ backgroundColor: `rgb(${color})` }}
                                        title={color}
                                    />
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                End date
                            </label>
                            <input
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                rows="3"
                                placeholder="e.g., Special summer sale! Don't miss out..."
                                type="datetime-local"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}