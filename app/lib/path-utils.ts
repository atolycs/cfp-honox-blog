export const baseName = (check_path: string) => {
    const match = check_path.match(/([^/]+)\.md$/)
    if (!match) {
        throw new Error('Invalid file path')
    }
    return match[1]
}